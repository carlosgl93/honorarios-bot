import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '@/config/firebase';
import { createOrUpdateUserProfile } from '@/services/firestore';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Update user profile and last login in Firestore
        try {
          await createOrUpdateUserProfile(
            user.uid,
            user.email || '',
            user.displayName || undefined,
            user.photoURL || undefined,
          );
        } catch (error) {
          console.error('Error updating user profile:', error);
        }
      }
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Create/update user profile in Firestore
    await createOrUpdateUserProfile(
      userCredential.user.uid,
      userCredential.user.email || '',
      userCredential.user.displayName || undefined,
      userCredential.user.photoURL || undefined,
    );
  };

  const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Create user profile in Firestore
    await createOrUpdateUserProfile(
      userCredential.user.uid,
      userCredential.user.email || '',
      userCredential.user.displayName || undefined,
      userCredential.user.photoURL || undefined,
    );
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    // Create/update user profile in Firestore
    await createOrUpdateUserProfile(
      userCredential.user.uid,
      userCredential.user.email || '',
      userCredential.user.displayName || undefined,
      userCredential.user.photoURL || undefined,
    );
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
