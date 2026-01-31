import * as admin from 'firebase-admin';
import { UserCredentials, BoletaData, BotExecutionLog } from './types';
import { encryptionService } from './encryption';

// Initialize Firebase Admin (only if not already initialized)
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

const COLLECTIONS = {
  CREDENTIALS: 'credentials',
  BOLETAS: 'boletas',
  LOGS: 'execution_logs',
};

export const firestoreService = {
  // Credentials Management
  async saveCredentials(userId: string, rut: string, password: string): Promise<void> {
    const encryptedPassword = encryptionService.encrypt(password);

    const credentials = {
      rut: encryptionService.encrypt(rut),
      encryptedPassword,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection(COLLECTIONS.CREDENTIALS).doc(userId).set(credentials);
  },

  async getCredentials(userId: string): Promise<{ rut: string; password: string } | null> {
    const docRef = db.collection(COLLECTIONS.CREDENTIALS).doc(userId);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return null;
    }

    const data = docSnap.data() as UserCredentials;
    return {
      rut: encryptionService.decrypt(data.rut),
      password: encryptionService.decrypt(data.encryptedPassword),
    };
  },

  // Boleta Management
  async saveBoleta(boleta: Omit<BoletaData, 'id'>): Promise<string> {
    const boletaData = {
      ...boleta,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      serviceDate: admin.firestore.Timestamp.fromDate(boleta.serviceDate),
      emissionDate: admin.firestore.Timestamp.fromDate(boleta.emissionDate),
    };

    const docRef = await db.collection(COLLECTIONS.BOLETAS).add(boletaData);
    return docRef.id;
  },

  async updateBoleta(boletaId: string, updates: Partial<BoletaData>): Promise<void> {
    const updateData: any = {
      ...updates,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    if (updates.serviceDate) {
      updateData.serviceDate = admin.firestore.Timestamp.fromDate(updates.serviceDate);
    }
    if (updates.emissionDate) {
      updateData.emissionDate = admin.firestore.Timestamp.fromDate(updates.emissionDate);
    }

    await db.collection(COLLECTIONS.BOLETAS).doc(boletaId).update(updateData);
  },

  async getBoleta(boletaId: string): Promise<BoletaData | null> {
    const docRef = db.collection(COLLECTIONS.BOLETAS).doc(boletaId);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return null;
    }

    const data = docSnap.data()!;
    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
      serviceDate: data.serviceDate.toDate(),
      emissionDate: data.emissionDate.toDate(),
    } as BoletaData;
  },

  async getUserBoletas(userId: string): Promise<BoletaData[]> {
    const querySnapshot = await db
      .collection(COLLECTIONS.BOLETAS)
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
        serviceDate: data.serviceDate.toDate(),
        emissionDate: data.emissionDate.toDate(),
      } as BoletaData;
    });
  },

  // Execution Logs
  async addLog(log: Omit<BotExecutionLog, 'id'>): Promise<void> {
    const logData = {
      ...log,
      timestamp: admin.firestore.Timestamp.fromDate(log.timestamp),
    };

    await db.collection(COLLECTIONS.LOGS).add(logData);
  },

  async getBoletaLogs(boletaId: string): Promise<BotExecutionLog[]> {
    const querySnapshot = await db
      .collection(COLLECTIONS.LOGS)
      .where('boletaId', '==', boletaId)
      .orderBy('timestamp', 'asc')
      .get();

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp.toDate(),
      } as BotExecutionLog;
    });
  },
};
