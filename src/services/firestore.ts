import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from '@/config/firebase';
import { BusinessProfile } from '@/types/business';

/**
 * Firestore service for managing users and business profiles
 */

// Collection names
const USERS_COLLECTION = 'users';
const BUSINESS_PROFILES_COLLECTION = 'businessProfiles';

// User profile interface
export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  hasBusinessProfile: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
}

/**
 * Convert Firestore Timestamp to Date
 */
const timestampToDate = (timestamp: unknown): Date => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  if (timestamp instanceof Date) {
    return timestamp;
  }
  return new Date();
};

/**
 * User Profile Operations
 */

/**
 * Create or update user profile in Firestore
 */
export const createOrUpdateUserProfile = async (
  uid: string,
  email: string,
  displayName?: string,
  photoURL?: string,
): Promise<void> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    // Update existing user
    await updateDoc(userRef, {
      email,
      displayName: displayName || null,
      photoURL: photoURL || null,
      updatedAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });
  } else {
    // Create new user
    await setDoc(userRef, {
      uid,
      email,
      displayName: displayName || null,
      photoURL: photoURL || null,
      hasBusinessProfile: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });
  }
};

/**
 * Get user profile from Firestore
 */
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return null;
  }

  const data = userSnap.data();
  return {
    uid: data.uid,
    email: data.email,
    displayName: data.displayName,
    photoURL: data.photoURL,
    hasBusinessProfile: data.hasBusinessProfile || false,
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
    lastLoginAt: timestampToDate(data.lastLoginAt),
  };
};

/**
 * Update user's last login time
 */
export const updateLastLogin = async (uid: string): Promise<void> => {
  const userRef = doc(db, USERS_COLLECTION, uid);
  await updateDoc(userRef, {
    lastLoginAt: serverTimestamp(),
  });
};

/**
 * Business Profile Operations
 */

/**
 * Create or update business profile
 */
export const saveBusinessProfile = async (
  profile: Omit<BusinessProfile, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<string> => {
  // Use userId as document ID for easy lookup
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, profile.userId);
  const profileSnap = await getDoc(profileRef);

  if (profileSnap.exists()) {
    // Update existing profile
    await updateDoc(profileRef, {
      ...profile,
      updatedAt: serverTimestamp(),
    });
  } else {
    // Create new profile
    await setDoc(profileRef, {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Update user's hasBusinessProfile flag
    const userRef = doc(db, USERS_COLLECTION, profile.userId);
    await updateDoc(userRef, {
      hasBusinessProfile: true,
      updatedAt: serverTimestamp(),
    });
  }

  return profile.userId;
};

/**
 * Get business profile by user ID
 */
export const getBusinessProfile = async (userId: string): Promise<BusinessProfile | null> => {
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, userId);
  const profileSnap = await getDoc(profileRef);

  if (!profileSnap.exists()) {
    return null;
  }

  const data = profileSnap.data();
  return {
    id: profileSnap.id,
    userId: data.userId,
    nombreEmpresa: data.nombreEmpresa,
    tipoNegocio: data.tipoNegocio,
    rut: data.rut,
    giro: data.giro,
    email: data.email,
    telefono: data.telefono,
    sitioWeb: data.sitioWeb,
    direccion: data.direccion,
    comuna: data.comuna,
    ciudad: data.ciudad,
    region: data.region,
    logoUrl: data.logoUrl,
    formatoNumeroFactura: data.formatoNumeroFactura,
    siguienteNumeroFactura: data.siguienteNumeroFactura,
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  };
};

/**
 * Get business profile by RUT (for validation/lookup)
 */
export const getBusinessProfileByRut = async (rut: string): Promise<BusinessProfile | null> => {
  const profilesRef = collection(db, BUSINESS_PROFILES_COLLECTION);
  const q = query(profilesRef, where('rut', '==', rut));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  const data = doc.data();

  return {
    id: doc.id,
    userId: data.userId,
    nombreEmpresa: data.nombreEmpresa,
    tipoNegocio: data.tipoNegocio,
    rut: data.rut,
    giro: data.giro,
    email: data.email,
    telefono: data.telefono,
    sitioWeb: data.sitioWeb,
    direccion: data.direccion,
    comuna: data.comuna,
    ciudad: data.ciudad,
    region: data.region,
    logoUrl: data.logoUrl,
    formatoNumeroFactura: data.formatoNumeroFactura,
    siguienteNumeroFactura: data.siguienteNumeroFactura,
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  };
};

/**
 * Update business profile fields
 */
export const updateBusinessProfile = async (
  userId: string,
  updates: Partial<Omit<BusinessProfile, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>,
): Promise<void> => {
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, userId);
  await updateDoc(profileRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

/**
 * Increment invoice number counter
 */
export const incrementInvoiceNumber = async (userId: string): Promise<number> => {
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, userId);
  const profileSnap = await getDoc(profileRef);

  if (!profileSnap.exists()) {
    throw new Error('Business profile not found');
  }

  const currentNumber = profileSnap.data().siguienteNumeroFactura || 1;
  const nextNumber = currentNumber + 1;

  await updateDoc(profileRef, {
    siguienteNumeroFactura: nextNumber,
    updatedAt: serverTimestamp(),
  });

  return currentNumber;
};

/**
 * Check if user has business profile
 */
export const hasBusinessProfile = async (userId: string): Promise<boolean> => {
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, userId);
  const profileSnap = await getDoc(profileRef);
  return profileSnap.exists();
};

/**
 * Delete business profile (soft delete - mark as inactive)
 */
export const deleteBusinessProfile = async (userId: string): Promise<void> => {
  const profileRef = doc(db, BUSINESS_PROFILES_COLLECTION, userId);
  await updateDoc(profileRef, {
    isActive: false,
    updatedAt: serverTimestamp(),
  });

  // Update user's hasBusinessProfile flag
  const userRef = doc(db, USERS_COLLECTION, userId);
  await updateDoc(userRef, {
    hasBusinessProfile: false,
    updatedAt: serverTimestamp(),
  });
};
