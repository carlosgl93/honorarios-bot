export interface UserCredentials {
  rut: string;
  encryptedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BoletaData {
  id?: string;
  userId: string; // RUT of the user
  // Receptor information
  receptorRut: string;
  receptorName: string;
  receptorEmail?: string;

  // Service details
  serviceDescription: string;
  serviceDate: Date;
  totalAmount: number;

  // Tax information
  retentionPercentage: number; // Usually 10.75% or 11.5%
  retentionAmount: number;
  netAmount: number;

  // Boleta metadata
  boletaNumber?: string;
  folio?: string;
  emissionDate: Date;
  status: 'draft' | 'processing' | 'issued' | 'failed';

  // Screenshots and proof
  screenshotUrl?: string;
  pdfUrl?: string;

  // Timestamps
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

export interface BotStatus {
  isRunning: boolean;
  currentStep: string;
  progress: number; // 0-100
  error?: string;
}

export interface FormData {
  receptorRut: string;
  receptorName: string;
  receptorEmail: string;
  serviceDescription: string;
  serviceDate: string;
  totalAmount: string;
}
