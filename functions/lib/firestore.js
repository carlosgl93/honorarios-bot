"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreService = void 0;
const admin = __importStar(require("firebase-admin"));
const encryption_1 = require("./encryption");
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
exports.firestoreService = {
    // Credentials Management
    async saveCredentials(userId, rut, password) {
        const encryptedPassword = encryption_1.encryptionService.encrypt(password);
        const credentials = {
            rut: encryption_1.encryptionService.encrypt(rut),
            encryptedPassword,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        };
        await db.collection(COLLECTIONS.CREDENTIALS).doc(userId).set(credentials);
    },
    async getCredentials(userId) {
        const docRef = db.collection(COLLECTIONS.CREDENTIALS).doc(userId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            return null;
        }
        const data = docSnap.data();
        return {
            rut: encryption_1.encryptionService.decrypt(data.rut),
            password: encryption_1.encryptionService.decrypt(data.encryptedPassword),
        };
    },
    // Boleta Management
    async saveBoleta(boleta) {
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
    async updateBoleta(boletaId, updates) {
        const updateData = {
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
    async getBoleta(boletaId) {
        const docRef = db.collection(COLLECTIONS.BOLETAS).doc(boletaId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            return null;
        }
        const data = docSnap.data();
        return {
            id: docSnap.id,
            ...data,
            createdAt: data.createdAt.toDate(),
            updatedAt: data.updatedAt.toDate(),
            serviceDate: data.serviceDate.toDate(),
            emissionDate: data.emissionDate.toDate(),
        };
    },
    async getUserBoletas(userId) {
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
            };
        });
    },
    // Execution Logs
    async addLog(log) {
        const logData = {
            ...log,
            timestamp: admin.firestore.Timestamp.fromDate(log.timestamp),
        };
        await db.collection(COLLECTIONS.LOGS).add(logData);
    },
    async getBoletaLogs(boletaId) {
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
            };
        });
    },
};
//# sourceMappingURL=firestore.js.map