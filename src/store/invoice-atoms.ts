import { atom } from 'jotai';

import { BusinessProfile } from '@/types/business';
import { InvoiceData, InvoiceFormData, createEmptyInvoiceItem } from '@/types/invoice';

// Business Profile Atoms
export const businessProfileAtom = atom<BusinessProfile | null>(null);
export const hasBusinessProfileAtom = atom<boolean>(false);

// Invoice Form Atoms
export const invoiceFormAtom = atom<InvoiceFormData>({
  clienteNombre: '',
  clienteRut: '',
  clienteEmail: '',
  clienteDireccion: '',
  clienteComuna: '',
  clienteCiudad: '',
  items: [createEmptyInvoiceItem()],
  fechaEmision: new Date().toISOString().split('T')[0],
  fechaVencimiento: '',
  notas: '',
  condicionesPago: 'Pago contado',
});

// Invoices List Atoms
export const invoicesListAtom = atom<InvoiceData[]>([]);
export const invoicesLoadingAtom = atom<boolean>(false);

// Current Invoice Atom (for viewing/editing)
export const currentInvoiceAtom = atom<InvoiceData | null>(null);
