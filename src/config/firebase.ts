import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Functions
export const functions = getFunctions(app);

// Connect to emulators if running locally
if (import.meta.env.DEV || window.location.hostname === 'localhost') {
  console.log('🔧 Connecting to Firebase Emulators...');

  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    console.log('✅ Auth Emulator connected');
  } catch {
    console.warn('⚠️ Auth Emulator connection skipped (already connected or unavailable)');
  }

  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('✅ Firestore Emulator connected');
  } catch {
    console.warn('⚠️ Firestore Emulator connection skipped (already connected or unavailable)');
  }

  try {
    connectFunctionsEmulator(functions, 'localhost', 5001);
    console.log('✅ Functions Emulator connected');
  } catch {
    console.warn('⚠️ Functions Emulator connection skipped (already connected or unavailable)');
  }
}

// Initialize Analytics (only in production)
export const analytics =
  typeof window !== 'undefined' && !import.meta.env.DEV ? getAnalytics(app) : null;
