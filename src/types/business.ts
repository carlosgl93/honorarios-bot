// Tipos para el perfil del negocio/empresa

export interface BusinessProfile {
  id?: string;
  userId: string;

  // Datos del Negocio
  nombreEmpresa: string;
  tipoNegocio: 'persona_natural' | 'empresa';
  rut: string; // RUT chileno
  giro?: string; // Giro o actividad comercial

  // Información de Contacto
  email: string;
  telefono?: string;
  sitioWeb?: string;

  // Dirección
  direccion: string;
  comuna: string;
  ciudad: string;
  region: string;

  // Branding
  logoUrl?: string;

  // Configuración de Facturación
  formatoNumeroFactura: string; // e.g., "FACT-{YYYY}-{####}"
  siguienteNumeroFactura: number; // Contador para autoincremento

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface BusinessFormData {
  nombreEmpresa: string;
  tipoNegocio: 'persona_natural' | 'empresa';
  rut: string;
  giro?: string;
  email: string;
  telefono?: string;
  sitioWeb?: string;
  direccion: string;
  comuna: string;
  ciudad: string;
  region: string;
}

// Regiones de Chile
export const REGIONES_CHILE = [
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región Metropolitana',
  "Región del Libertador General Bernardo O'Higgins",
  'Región del Maule',
  'Región de Ñuble',
  'Región del Biobío',
  'Región de La Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región de Aysén del General Carlos Ibáñez del Campo',
  'Región de Magallanes y de la Antártica Chilena',
] as const;
