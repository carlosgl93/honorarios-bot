import { PDFViewer, pdf } from '@react-pdf/renderer';
import { useState } from 'react';

import { Close, Download } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { PDFInvoice } from '@/components/PDFInvoice';
import { BusinessProfile } from '@/types/business';
import { InvoiceData } from '@/types/invoice';

interface PDFPreviewDialogProps {
  open: boolean;
  onClose: () => void;
  business: BusinessProfile;
  invoice: InvoiceData;
  invoiceNumber: string;
}

export const PDFPreviewDialog = ({
  open,
  onClose,
  business,
  invoice,
  invoiceNumber,
}: PDFPreviewDialogProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(
        <PDFInvoice business={business} invoice={invoice} invoiceNumber={invoiceNumber} />,
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Factura-${invoiceNumber}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al generar PDF:', error);
      alert('Error al generar el PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Vista Previa de Factura
          <Button onClick={onClose} startIcon={<Close />}>
            Cerrar
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ height: '70vh', p: 0 }}>
        <PDFViewer width="100%" height="100%">
          <PDFInvoice business={business} invoice={invoice} invoiceNumber={invoiceNumber} />
        </PDFViewer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          variant="contained"
          startIcon={isGenerating ? <CircularProgress size={20} /> : <Download />}
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generando...' : 'Descargar PDF'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
