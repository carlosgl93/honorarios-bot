import { httpsCallable } from 'firebase/functions';

import { functions } from '@/config/firebase';
import { BoletaData, FormData } from '@/types/boleta';

interface SaveCredentialsRequest {
  rut: string;
  password: string;
}

interface CreateBoletaRequest {
  receptorRut: string;
  receptorName: string;
  receptorEmail?: string;
  serviceDescription: string;
  serviceDate: string;
  totalAmount: number;
}

interface CreateBoletaResponse {
  success: boolean;
  boletaId?: string;
  boletaNumber?: string;
  folio?: string;
  error?: string;
}

interface GetBoletasResponse {
  success: boolean;
  boletas: BoletaData[];
}

export interface BoletaLog {
  timestamp: Date;
  status: string;
  message: string;
  details?: string;
}

export const apiClient = {
  // Save user credentials
  async saveCredentials(
    rut: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> {
    const saveCredentialsFn = httpsCallable<
      SaveCredentialsRequest,
      { success: boolean; message: string }
    >(functions, 'saveCredentials');

    const result = await saveCredentialsFn({ rut, password });
    return result.data;
  },

  // Create boleta (triggers automation)
  async createBoleta(formData: FormData): Promise<CreateBoletaResponse> {
    const createBoletaFn = httpsCallable<CreateBoletaRequest, CreateBoletaResponse>(
      functions,
      'createBoleta',
    );

    const request: CreateBoletaRequest = {
      receptorRut: formData.receptorRut,
      receptorName: formData.receptorName,
      receptorEmail: formData.receptorEmail,
      serviceDescription: formData.serviceDescription,
      serviceDate: formData.serviceDate,
      totalAmount: parseFloat(formData.totalAmount),
    };

    const result = await createBoletaFn(request);
    return result.data;
  },

  // Get user's boletas
  async getUserBoletas(): Promise<BoletaData[]> {
    const getUserBoletasFn = httpsCallable<void, GetBoletasResponse>(functions, 'getUserBoletas');

    const result = await getUserBoletasFn();
    return result.data.boletas;
  },

  // Get boleta logs
  async getBoletaLogs(boletaId: string): Promise<BoletaLog[]> {
    const getBoletaLogsFn = httpsCallable<
      { boletaId: string },
      { success: boolean; logs: BoletaLog[] }
    >(functions, 'getBoletaLogs');

    const result = await getBoletaLogsFn({ boletaId });
    return result.data.logs;
  },
};
