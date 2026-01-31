import * as functions from 'firebase-functions';
import { SIIBot } from './sii-bot';
import { firestoreService } from './firestore';
import { CreateBoletaRequest, SaveCredentialsRequest, BoletaData } from './types';

// Save user credentials
export const saveCredentials = functions.https.onCall(async (data: SaveCredentialsRequest, context) => {
  // Verify user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  try {
    const userId = context.auth.uid;
    await firestoreService.saveCredentials(userId, data.rut, data.password);
    
    return { success: true, message: 'Credentials saved successfully' };
  } catch (error) {
    console.error('Error saving credentials:', error);
    throw new functions.https.HttpsError('internal', 'Failed to save credentials');
  }
});

// Create and emit boleta
export const createBoleta = functions
  .runWith({
    timeoutSeconds: 540, // 9 minutes (max for Cloud Functions)
    memory: '2GB',
  })
  .https.onCall(async (data: CreateBoletaRequest, context) => {
    // Verify user is authenticated
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
    }

    const userId = context.auth.uid;

    try {
      // Get user credentials
      const credentials = await firestoreService.getCredentials(userId);
      if (!credentials) {
        throw new functions.https.HttpsError('not-found', 'User credentials not found');
      }

      // Calculate retention
      const totalAmount = data.totalAmount;
      const retentionPercentage = 10.75;
      const retentionAmount = (totalAmount * retentionPercentage) / 100;
      const netAmount = totalAmount - retentionAmount;

      // Create boleta data
      const boletaData: Omit<BoletaData, 'id'> = {
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
      const boletaId = await firestoreService.saveBoleta(boletaData);

      // Initialize and run bot
      const bot = new SIIBot({
        headless: process.env.BOT_HEADLESS === 'true',
        slowMo: parseInt(process.env.BOT_SLOW_MO || '100'),
      });

      await bot.initialize();
      const result = await bot.executeBoleta(
        credentials.rut,
        credentials.password,
        { ...boletaData, id: boletaId }
      );
      await bot.close();

      // Update boleta with results
      if (result.success) {
        await firestoreService.updateBoleta(boletaId, {
          status: 'issued',
          boletaNumber: result.boletaNumber,
          folio: result.folio,
          screenshotUrl: result.screenshotPath,
        });

        // Save logs
        for (const log of result.logs) {
          await firestoreService.addLog({
            boletaId,
            step: log.step,
            status: log.status as 'success' | 'error' | 'warning',
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
      } else {
        await firestoreService.updateBoleta(boletaId, {
          status: 'failed',
          screenshotUrl: result.screenshotPath,
        });

        throw new functions.https.HttpsError('internal', result.error || 'Bot execution failed');
      }
    } catch (error) {
      console.error('Error creating boleta:', error);
      if (error instanceof functions.https.HttpsError) {
        throw error;
      }
      throw new functions.https.HttpsError('internal', 'Failed to create boleta');
    }
  });

// Get user's boletas
export const getUserBoletas = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  try {
    const userId = context.auth.uid;
    const boletas = await firestoreService.getUserBoletas(userId);
    
    return { success: true, boletas };
  } catch (error) {
    console.error('Error getting boletas:', error);
    throw new functions.https.HttpsError('internal', 'Failed to get boletas');
  }
});

// Get boleta logs
export const getBoletaLogs = functions.https.onCall(async (data: { boletaId: string }, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  try {
    const logs = await firestoreService.getBoletaLogs(data.boletaId);
    
    return { success: true, logs };
  } catch (error) {
    console.error('Error getting logs:', error);
    throw new functions.https.HttpsError('internal', 'Failed to get logs');
  }
});
