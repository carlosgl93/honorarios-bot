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
exports.getBoletaLogs = exports.getUserBoletas = exports.createBoleta = exports.saveCredentials = void 0;
const functions = __importStar(require("firebase-functions"));
const sii_bot_1 = require("./sii-bot");
const firestore_1 = require("./firestore");
// Save user credentials
exports.saveCredentials = functions.https.onCall(async (data, context) => {
    // Verify user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    try {
        const userId = context.auth.uid;
        await firestore_1.firestoreService.saveCredentials(userId, data.rut, data.password);
        return { success: true, message: 'Credentials saved successfully' };
    }
    catch (error) {
        console.error('Error saving credentials:', error);
        throw new functions.https.HttpsError('internal', 'Failed to save credentials');
    }
});
// Create and emit boleta
exports.createBoleta = functions
    .runWith({
    timeoutSeconds: 540, // 9 minutes (max for Cloud Functions)
    memory: '2GB',
})
    .https.onCall(async (data, context) => {
    // Verify user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    const userId = context.auth.uid;
    try {
        // Get user credentials
        const credentials = await firestore_1.firestoreService.getCredentials(userId);
        if (!credentials) {
            throw new functions.https.HttpsError('not-found', 'User credentials not found');
        }
        // Calculate retention
        const totalAmount = data.totalAmount;
        const retentionPercentage = 10.75;
        const retentionAmount = (totalAmount * retentionPercentage) / 100;
        const netAmount = totalAmount - retentionAmount;
        // Create boleta data
        const boletaData = {
            userId,
            receptorRut: data.receptorRut,
            receptorName: data.receptorName,
            receptorEmail: data.receptorEmail,
            serviceDescription: data.serviceDescription,
            serviceDate: new Date(data.serviceDate),
            totalAmount,
            retentionPercentage,
            retentionAmount,
            netAmount,
            emissionDate: new Date(),
            status: 'processing',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        // Save boleta to Firestore
        const boletaId = await firestore_1.firestoreService.saveBoleta(boletaData);
        // Initialize and run bot
        const bot = new sii_bot_1.SIIBot({
            headless: process.env.BOT_HEADLESS === 'true',
            slowMo: parseInt(process.env.BOT_SLOW_MO || '100'),
        });
        await bot.initialize();
        const result = await bot.executeBoleta(credentials.rut, credentials.password, { ...boletaData, id: boletaId });
        await bot.close();
        // Update boleta with results
        if (result.success) {
            await firestore_1.firestoreService.updateBoleta(boletaId, {
                status: 'issued',
                boletaNumber: result.boletaNumber,
                folio: result.folio,
                screenshotUrl: result.screenshotPath,
            });
            // Save logs
            for (const log of result.logs) {
                await firestore_1.firestoreService.addLog({
                    boletaId,
                    step: log.step,
                    status: log.status,
                    message: log.message,
                    timestamp: log.timestamp,
                });
            }
            return {
                success: true,
                boletaId,
                boletaNumber: result.boletaNumber,
                folio: result.folio,
            };
        }
        else {
            await firestore_1.firestoreService.updateBoleta(boletaId, {
                status: 'failed',
                screenshotUrl: result.screenshotPath,
            });
            throw new functions.https.HttpsError('internal', result.error || 'Bot execution failed');
        }
    }
    catch (error) {
        console.error('Error creating boleta:', error);
        if (error instanceof functions.https.HttpsError) {
            throw error;
        }
        throw new functions.https.HttpsError('internal', 'Failed to create boleta');
    }
});
// Get user's boletas
exports.getUserBoletas = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    try {
        const userId = context.auth.uid;
        const boletas = await firestore_1.firestoreService.getUserBoletas(userId);
        return { success: true, boletas };
    }
    catch (error) {
        console.error('Error getting boletas:', error);
        throw new functions.https.HttpsError('internal', 'Failed to get boletas');
    }
});
// Get boleta logs
exports.getBoletaLogs = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }
    try {
        const logs = await firestore_1.firestoreService.getBoletaLogs(data.boletaId);
        return { success: true, logs };
    }
    catch (error) {
        console.error('Error getting logs:', error);
        throw new functions.https.HttpsError('internal', 'Failed to get logs');
    }
});
//# sourceMappingURL=index.js.map