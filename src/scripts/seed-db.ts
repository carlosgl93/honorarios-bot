/**
 * Database Seeding Script
 * Seeds the Firebase emulator with test data for development
 */
import { initializeApp } from 'firebase/app';
import { FirebaseError } from 'firebase/app';
import { connectAuthEmulator, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {
  connectFirestoreEmulator,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

// Firebase config for local development
const firebaseConfig = {
  apiKey: 'AIzaSyCMo3rMU28z-nyDdtiYY7gnPDldOoyxeKU',
  authDomain: 'sii-robot-a6284.firebaseapp.com',
  projectId: 'sii-robot-a6284',
  storageBucket: 'sii-robot-a6284.firebasestorage.app',
  messagingSenderId: '415042811690',
  appId: '1:415042811690:web:80612751ce453e21291053',
  measurementId: 'G-30TQY79797',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Connect to emulators (using default ports)
connectFirestoreEmulator(db, 'localhost', 8080);
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

// Test user credentials
const TEST_USER_EMAIL = 'test@example.com';
const TEST_USER_PASSWORD = 'TestPassword123!';

// Default business profile data
const DEFAULT_BUSINESS_PROFILE = {
  nombreEmpresa: 'Consultora Demo SpA',
  tipoNegocio: 'empresa' as const,
  rut: '76.123.456-7',
  giro: 'Servicios de consultoría y desarrollo de software',
  email: 'contacto@consultorademo.cl',
  telefono: '+56 9 1234 5678',
  sitioWeb: 'https://www.consultorademo.cl',
  direccion: 'Av. Providencia 1234, Oficina 567',
  comuna: 'Providencia',
  ciudad: 'Santiago',
  region: 'Región Metropolitana',
  logoUrl: '',
  formatoNumeroFactura: 'FACT-{YYYY}-{####}',
  siguienteNumeroFactura: 1,
};

async function seedDatabase() {
  console.log('🌱 Starting database seeding...\n');

  try {
    // Step 1: Create test user
    console.log('👤 Creating test user...');
    let userId: string;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        TEST_USER_EMAIL,
        TEST_USER_PASSWORD,
      );
      userId = userCredential.user.uid;
      console.log(`✅ Test user created: ${TEST_USER_EMAIL}`);
      console.log(`   UID: ${userId}\n`);
    } catch (error: unknown) {
      if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
        console.log('⚠️  Test user already exists, fetching existing user...');
        // Get existing user UID - in emulator, we'll use a predictable UID
        userId = 'test-user-uid';
        console.log(`   Using UID: ${userId}\n`);
      } else {
        throw error;
      }
    }

    // Step 2: Create user profile document
    console.log('📝 Creating user profile...');
    const userRef = doc(db, 'users', userId);
    await setDoc(
      userRef,
      {
        uid: userId,
        email: TEST_USER_EMAIL,
        displayName: 'Test User',
        photoURL: null,
        hasBusinessProfile: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      },
      { merge: true },
    );
    console.log('✅ User profile created\n');

    // Step 3: Create business profile
    console.log('🏢 Creating business profile...');
    const businessRef = doc(db, 'businessProfiles', userId);
    await setDoc(
      businessRef,
      {
        ...DEFAULT_BUSINESS_PROFILE,
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
    console.log('✅ Business profile created\n');

    // Summary
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Database seeding completed successfully!\n');
    console.log('📋 Test Credentials:');
    console.log(`   Email:    ${TEST_USER_EMAIL}`);
    console.log(`   Password: ${TEST_USER_PASSWORD}`);
    console.log(`   UID:      ${userId}\n`);
    console.log('🏢 Business Profile:');
    console.log(`   Company:  ${DEFAULT_BUSINESS_PROFILE.nombreEmpresa}`);
    console.log(`   RUT:      ${DEFAULT_BUSINESS_PROFILE.rut}`);
    console.log(`   Email:    ${DEFAULT_BUSINESS_PROFILE.email}\n`);
    console.log('🌐 Emulator URLs:');
    console.log('   Firestore: http://localhost:8080');
    console.log('   Auth:      http://localhost:9099');
    console.log('   UI:        http://localhost:4000');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();
