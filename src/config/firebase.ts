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

  // Get emulator ports from environment variables (defaults to standard Firebase ports)
  const authPort = import.meta.env.VITE_AUTH_EMULATOR_PORT || '9099';
  const firestorePort = import.meta.env.VITE_FIRESTORE_EMULATOR_PORT || '8080';
  const functionsPort = import.meta.env.VITE_FUNCTIONS_EMULATOR_PORT || '5001';

  try {
    connectAuthEmulator(auth, `http://localhost:${authPort}`, { disableWarnings: true });
    console.log(`✅ Auth Emulator connected (port ${authPort})`);
  } catch {
    console.warn('⚠️ Auth Emulator connection skipped (already connected or unavailable)');
  }

  try {
    connectFirestoreEmulator(db, 'localhost', Number(firestorePort));
    console.log(`✅ Firestore Emulator connected (port ${firestorePort})`);
  } catch {
    console.warn('⚠️ Firestore Emulator connection skipped (already connected or unavailable)');
  }

  try {
    connectFunctionsEmulator(functions, 'localhost', Number(functionsPort));
    console.log(`✅ Functions Emulator connected (port ${functionsPort})`);
  } catch {
    console.warn('⚠️ Functions Emulator connection skipped (already connected or unavailable)');
  }
}

// Initialize Analytics (only in production)
export const analytics =
  typeof window !== 'undefined' && !import.meta.env.DEV ? getAnalytics(app) : null;
