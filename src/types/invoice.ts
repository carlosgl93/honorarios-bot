// Tipos para facturas/boletas

export interface InvoiceItem {
  id: string; // ID temporal para el cliente
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  total: number; // cantidad * precioUnitario
}

export interface InvoiceData {
  id?: string;
  userId: string;
  numeroFactura: string; // Generado automáticamente

  // Información del Cliente
  clienteNombre: string;
  clienteRut?: string;
  clienteEmail?: string;
  clienteDireccion?: string;
  clienteComuna?: string;
  clienteCiudad?: string;

  // Items de la Factura
  items: InvoiceItem[];

  // Cálculos Financieros
  subtotal: number; // Suma de todos los items (neto)
  tasaIVA: number; // 19% fijo para Chile
  montoIVA: number; // subtotal * 0.19
  total: number; // subtotal + montoIVA

  // Fechas
  fechaEmision: Date;
  fechaVencimiento?: Date;

  // Estado
  estado: 'borrador' | 'emitida' | 'pagada' | 'anulada';

  // Notas
  notas?: string;
  condicionesPago?: string; // ej: "Pago contado", "30 días"

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceFormData {
  clienteNombre: string;
  clienteRut?: string;
  clienteEmail?: string;
  clienteDireccion?: string;
  clienteComuna?: string;
  clienteCiudad?: string;
  items: InvoiceItem[];
  fechaEmision: string;
  fechaVencimiento?: string;
  notas?: string;
  condicionesPago?: string;
}

// Constantes
export const IVA_CHILE = 0.19; // 19%

// Helper para crear un item vacío
export const createEmptyInvoiceItem = (): InvoiceItem => ({
  id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  descripcion: '',
  cantidad: 1,
  precioUnitario: 0,
  total: 0,
});

// Cálculo de totales
export const calculateInvoiceTotals = (items: InvoiceItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const montoIVA = Math.round(subtotal * IVA_CHILE);
  const total = subtotal + montoIVA;

  return {
    subtotal,
    tasaIVA: IVA_CHILE,
    montoIVA,
    total,
  };
};

// Formatear moneda chilena
export const formatCLP = (amount: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Formatear RUT chileno
export const formatRUT = (rut: string): string => {
  const cleaned = rut.replace(/[^0-9kK]/g, '');
  if (cleaned.length <= 1) return cleaned;

  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1).toUpperCase();

  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${formatted}-${dv}`;
};

// Validar RUT chileno
export const validateRUT = (rut: string): boolean => {
  const cleaned = rut.replace(/[^0-9kK]/g, '');
  if (cleaned.length < 2) return false;

  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1).toUpperCase();

  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const calculatedDV = 11 - (sum % 11);
  const expectedDV =
    calculatedDV === 11 ? '0' : calculatedDV === 10 ? 'K' : calculatedDV.toString();

  return dv === expectedDV;
};
