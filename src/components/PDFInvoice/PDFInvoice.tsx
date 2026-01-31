import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import { BusinessProfile } from '@/types/business';
import { InvoiceData, calculateInvoiceTotals, formatCLP, formatRUT } from '@/types/invoice';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  companyInfo: {
    fontSize: 9,
    marginBottom: 2,
    color: '#666',
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 8,
  },
  invoiceNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  invoiceDate: {
    fontSize: 9,
    color: '#666',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1976d2',
    borderBottomWidth: 1,
    borderBottomColor: '#1976d2',
    paddingBottom: 4,
  },
  clientInfo: {
    fontSize: 9,
    marginBottom: 2,
  },
  table: {
    width: '100%',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: 8,
    fontWeight: 'bold',
    fontSize: 9,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 8,
    fontSize: 9,
  },
  tableRowAlt: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 8,
    fontSize: 9,
    backgroundColor: '#f5f5f5',
  },
  colDescription: {
    flex: 5,
  },
  colQuantity: {
    flex: 1.5,
    textAlign: 'right',
  },
  colPrice: {
    flex: 2,
    textAlign: 'right',
  },
  colTotal: {
    flex: 2,
    textAlign: 'right',
  },
  totalsSection: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalsTable: {
    width: 250,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    fontSize: 10,
  },
  totalRowSubtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  totalRowFinal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
  },
  notesSection: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  notesTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 9,
    color: '#666',
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#999',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
});

interface PDFInvoiceProps {
  business: BusinessProfile;
  invoice: InvoiceData;
  invoiceNumber: string;
}

export const PDFInvoice = ({ business, invoice, invoiceNumber }: PDFInvoiceProps) => {
  const totals = calculateInvoiceTotals(invoice.items);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {business.logoUrl && <Image src={business.logoUrl} style={styles.logo} />}
            <Text style={styles.companyName}>{business.nombreEmpresa}</Text>
            <Text style={styles.companyInfo}>RUT: {formatRUT(business.rut)}</Text>
            <Text style={styles.companyInfo}>Giro: {business.giro}</Text>
            <Text style={styles.companyInfo}>
              {business.direccion}, {business.comuna}
            </Text>
            <Text style={styles.companyInfo}>
              {business.ciudad}, {business.region}
            </Text>
            {business.telefono && <Text style={styles.companyInfo}>Tel: {business.telefono}</Text>}
            {business.email && <Text style={styles.companyInfo}>Email: {business.email}</Text>}
            {business.sitioWeb && <Text style={styles.companyInfo}>Web: {business.sitioWeb}</Text>}
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.invoiceTitle}>FACTURA</Text>
            <Text style={styles.invoiceNumber}>N° {invoiceNumber}</Text>
            <Text style={styles.invoiceDate}>
              Fecha Emisión: {new Date(invoice.fechaEmision).toLocaleDateString('es-CL')}
            </Text>
            {invoice.fechaVencimiento && (
              <Text style={styles.invoiceDate}>
                Vencimiento: {new Date(invoice.fechaVencimiento).toLocaleDateString('es-CL')}
              </Text>
            )}
          </View>
        </View>

        {/* Client Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Cliente</Text>
          <Text style={styles.clientInfo}>
            <Text style={{ fontWeight: 'bold' }}>Cliente: </Text>
            {invoice.clienteNombre}
          </Text>
          {invoice.clienteRut && (
            <Text style={styles.clientInfo}>
              <Text style={{ fontWeight: 'bold' }}>RUT: </Text>
              {formatRUT(invoice.clienteRut)}
            </Text>
          )}
          {invoice.clienteEmail && (
            <Text style={styles.clientInfo}>
              <Text style={{ fontWeight: 'bold' }}>Email: </Text>
              {invoice.clienteEmail}
            </Text>
          )}
          {invoice.clienteDireccion && (
            <Text style={styles.clientInfo}>
              <Text style={{ fontWeight: 'bold' }}>Dirección: </Text>
              {invoice.clienteDireccion}
              {invoice.clienteComuna && `, ${invoice.clienteComuna}`}
              {invoice.clienteCiudad && `, ${invoice.clienteCiudad}`}
            </Text>
          )}
          {invoice.condicionesPago && (
            <Text style={styles.clientInfo}>
              <Text style={{ fontWeight: 'bold' }}>Condiciones de Pago: </Text>
              {invoice.condicionesPago}
            </Text>
          )}
        </View>

        {/* Items Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalle de Productos/Servicios</Text>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={styles.colDescription}>Descripción</Text>
              <Text style={styles.colQuantity}>Cantidad</Text>
              <Text style={styles.colPrice}>Precio Unit.</Text>
              <Text style={styles.colTotal}>Total</Text>
            </View>

            {/* Table Rows */}
            {invoice.items.map((item, index) => (
              <View key={item.id} style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
                <Text style={styles.colDescription}>{item.descripcion}</Text>
                <Text style={styles.colQuantity}>{item.cantidad}</Text>
                <Text style={styles.colPrice}>{formatCLP(item.precioUnitario)}</Text>
                <Text style={styles.colTotal}>{formatCLP(item.total)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsTable}>
            <View style={styles.totalRowSubtotal}>
              <Text>Subtotal (Neto)</Text>
              <Text>{formatCLP(totals.subtotal)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text>IVA (19%)</Text>
              <Text>{formatCLP(totals.montoIVA)}</Text>
            </View>
            <View style={styles.totalRowFinal}>
              <Text>TOTAL</Text>
              <Text>{formatCLP(totals.total)}</Text>
            </View>
          </View>
        </View>

        {/* Notes */}
        {invoice.notas && (
          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>Notas Adicionales:</Text>
            <Text style={styles.notesText}>{invoice.notas}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Este documento fue generado electrónicamente y tiene validez tributaria.</Text>
          <Text>
            {business.nombreEmpresa} - RUT: {formatRUT(business.rut)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
