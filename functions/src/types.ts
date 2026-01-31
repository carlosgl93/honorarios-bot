export interface UserCredentials {
  rut: string;
  encryptedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BoletaData {
  id?: string;
  userId: string;
  receptorRut: string;
  receptorName: string;
  receptorEmail?: string;
  serviceDescription: string;
  serviceDate: Date;
  totalAmount: number;
  retentionPercentage: number;
  retentionAmount: number;
  netAmount: number;
  boletaNumber?: string;
  folio?: string;
  emissionDate: Date;
  status: 'draft' | 'processing' | 'issued' | 'failed';
  screenshotUrl?: string;
  pdfUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BotExecutionLog {
  id?: string;
  boletaId: string;
  step: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  timestamp: Date;
  screenshotUrl?: string;
}

export interface CreateBoletaRequest {
  receptorRut: string;
  receptorName: string;
  receptorEmail?: string;
  serviceDescription: string;
  serviceDate: string;
  totalAmount: number;
}

export interface SaveCredentialsRequest {
  rut: string;
  password: string;
}
