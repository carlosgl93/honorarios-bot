import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

/**
 * Database Seeding Script
 * Seeds the Firebase emulator with test data for development.
 * Uses the Admin SDK to bypass security rules.
 */

// Must be set before importing firebase-admin
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8081';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';

// Initialize Admin SDK (no credentials needed for emulator)
initializeApp({ projectId: 'sii-robot-a6284' });

const db = getFirestore();
const auth = getAuth();

// Test user credentials
const TEST_USER_EMAIL = 'test@example.com';
const TEST_USER_PASSWORD = 'TestPassword123!';

// Default business profile data
const DEFAULT_BUSINESS_PROFILE = {
  nombreEmpresa: 'Consultora Demo SpA',
  tipoNegocio: 'empresa',
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
      const user = await auth.createUser({
        email: TEST_USER_EMAIL,
        password: TEST_USER_PASSWORD,
        displayName: 'Test User',
      });
      userId = user.uid;
      console.log(`✅ Test user created: ${TEST_USER_EMAIL}`);
      console.log(`   UID: ${userId}\n`);
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error && error.code === 'auth/email-already-exists') {
        console.log('⚠️  Test user already exists, fetching existing user...');
        const existing = await auth.getUserByEmail(TEST_USER_EMAIL);
        userId = existing.uid;
        console.log(`   Using UID: ${userId}\n`);
      } else {
        throw error;
      }
    }

    // Step 2: Create user profile document
    console.log('📝 Creating user profile...');
    await db.collection('users').doc(userId).set(
      {
        uid: userId,
        email: TEST_USER_EMAIL,
        displayName: 'Test User',
        photoURL: null,
        hasBusinessProfile: true,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        lastLoginAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
    console.log('✅ User profile created\n');

    // Step 3: Create business profile
    console.log('🏢 Creating business profile...');
    await db
      .collection('businessProfiles')
      .doc(userId)
      .set(
        {
          ...DEFAULT_BUSINESS_PROFILE,
          userId,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
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
    console.log('   Firestore: http://localhost:8081');
    console.log('   Auth:      http://localhost:9099');
    console.log('   UI:        http://localhost:4000');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
