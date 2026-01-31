import { atom } from 'jotai';

import { BoletaData, BotStatus, FormData } from '@/types/boleta';

// Bot execution status
export const botStatusAtom = atom<BotStatus>({
  isRunning: false,
  currentStep: '',
  progress: 0,
});

// Current user credentials (RUT only, password not stored in memory)
export const userRutAtom = atom<string>('');

// Form data for new boleta
export const boletaFormAtom = atom<FormData>({
  receptorRut: '',
  receptorName: '',
  receptorEmail: '',
  serviceDescription: '',
  serviceDate: new Date().toISOString().split('T')[0],
  totalAmount: '',
});

// User's boletas history
export const boletasHistoryAtom = atom<BoletaData[]>([]);

// Selected boleta for viewing details
export const selectedBoletaAtom = atom<BoletaData | null>(null);

// Credentials saved flag
export const hasCredentialsAtom = atom<boolean>(false);
