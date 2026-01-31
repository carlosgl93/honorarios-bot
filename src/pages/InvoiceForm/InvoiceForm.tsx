import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Add, Description, Visibility } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { useAtom, useAtomValue } from 'jotai';

import { InvoiceItemRow } from '@/components/InvoiceItemRow';
import { PDFPreviewDialog } from '@/components/PDFPreviewDialog';
import { useAuth } from '@/contexts/AuthContext';
import { businessProfileAtom, invoiceFormAtom } from '@/store/invoice-atoms';
import {
  InvoiceItem,
  calculateInvoiceTotals,
  createEmptyInvoiceItem,
  formatCLP,
  formatRUT,
  validateRUT,
} from '@/types/invoice';

export const InvoiceForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useAtom(invoiceFormAtom);
  const businessProfile = useAtomValue(businessProfileAtom);

  const [error, setError] = useState('');
  const [generating, setGenerating] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [generatedInvoiceNumber, setGeneratedInvoiceNumber] = useState('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Redirect to business profile if not configured
  // useEffect(() => {
  //   if (user && !businessProfile) {
  //     navigate('/perfil-negocio');
  //   }
  // }, [user, businessProfile, navigate]);

  if (!user || !businessProfile) return null;

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = e.target.value;

      if (field === 'clienteRut') {
        value = formatRUT(value);
      }

      setFormData({ ...formData, [field]: value });
    };

  const handleItemUpdate = (index: number, updatedItem: InvoiceItem) => {
    const newItems = [...formData.items];
    newItems[index] = updatedItem;
    setFormData({ ...formData, items: newItems });
  };

  const handleItemDelete = (index: number) => {
    if (formData.items.length === 1) {
      setError('Debe haber al menos un ítem en la factura');
      return;
    }
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, createEmptyInvoiceItem()],
    });
  };

  const handleGeneratePDF = async () => {
    setError('');

    // Validación
    if (!formData.clienteNombre) {
      setError('Ingrese el nombre del cliente');
      return;
    }

    if (formData.clienteRut && !validateRUT(formData.clienteRut)) {
      setError('RUT del cliente inválido');
      return;
    }

    const hasEmptyItems = formData.items.some(
      (item) => !item.descripcion || item.cantidad <= 0 || item.precioUnitario <= 0,
    );

    if (hasEmptyItems) {
      setError('Todos los ítems deben tener descripción, cantidad y precio válidos');
      return;
    }

    setGenerating(true);

    try {
      // Generar número de factura (simulado por ahora)
      // TODO: Implementar lógica con Firestore para obtener siguiente número
      const invoiceNum = businessProfile.formatoNumeroFactura.replace(
        '{N}',
        (businessProfile.siguienteNumeroFactura || 1).toString().padStart(6, '0'),
      );
      setGeneratedInvoiceNumber(invoiceNum);

      // Abrir diálogo de preview
      setPreviewOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al generar PDF');
    } finally {
      setGenerating(false);
    }
  };

  const totals = calculateInvoiceTotals(formData.items);

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Description sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          Nueva Factura
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Información del Cliente */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Información del Cliente
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Nombre / Razón Social"
                    value={formData.clienteNombre}
                    onChange={handleInputChange('clienteNombre')}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="RUT (opcional)"
                    value={formData.clienteRut}
                    onChange={handleInputChange('clienteRut')}
                    disabled={generating}
                    error={formData.clienteRut !== '' && !validateRUT(formData.clienteRut || '')}
                    helperText={
                      formData.clienteRut !== '' && !validateRUT(formData.clienteRut || '')
                        ? 'RUT inválido'
                        : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email (opcional)"
                    type="email"
                    value={formData.clienteEmail}
                    onChange={handleInputChange('clienteEmail')}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Dirección (opcional)"
                    value={formData.clienteDireccion}
                    onChange={handleInputChange('clienteDireccion')}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Comuna (opcional)"
                    value={formData.clienteComuna}
                    onChange={handleInputChange('clienteComuna')}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Ciudad (opcional)"
                    value={formData.clienteCiudad}
                    onChange={handleInputChange('clienteCiudad')}
                    disabled={generating}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Fechas y Condiciones */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Detalles de la Factura
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="date"
                    label="Fecha de Emisión"
                    value={formData.fechaEmision}
                    onChange={handleInputChange('fechaEmision')}
                    InputLabelProps={{ shrink: true }}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Fecha de Vencimiento"
                    value={formData.fechaVencimiento}
                    onChange={handleInputChange('fechaVencimiento')}
                    InputLabelProps={{ shrink: true }}
                    disabled={generating}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Condiciones de Pago"
                    value={formData.condicionesPago}
                    onChange={handleInputChange('condicionesPago')}
                    disabled={generating}
                    placeholder="Ej: Pago contado, 30 días"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Notas Adicionales"
                    value={formData.notas}
                    onChange={handleInputChange('notas')}
                    disabled={generating}
                    placeholder="Información adicional para el cliente..."
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Ítems de la Factura */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Typography variant="h6">Ítems de la Factura</Typography>
                <Button
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={handleAddItem}
                  disabled={generating}
                  size="small"
                >
                  Agregar Ítem
                </Button>
              </Box>

              <Box sx={{ mb: 2 }}>
                {formData.items.map((item, index) => (
                  <InvoiceItemRow
                    key={item.id}
                    item={item}
                    onUpdate={(updatedItem) => handleItemUpdate(index, updatedItem)}
                    onDelete={() => handleItemDelete(index)}
                    disabled={generating}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Totales */}
              <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Typography variant="body1" align="right">
                      <strong>Subtotal (Neto):</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" align="right">
                      {formatCLP(totals.subtotal)}
                    </Typography>
                  </Grid>

                  <Grid item xs={8}>
                    <Typography variant="body1" align="right">
                      <strong>IVA (19%):</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" align="right">
                      {formatCLP(totals.montoIVA)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider sx={{ my: 1 }} />
                  </Grid>

                  <Grid item xs={8}>
                    <Typography variant="h6" align="right">
                      <strong>Total:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" align="right" color="primary">
                      <strong>{formatCLP(totals.total)}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Botón Generar PDF */}
      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate('/facturas')}
          disabled={generating}
          sx={{ flex: 1 }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<Visibility />}
          onClick={handleGeneratePDF}
          disabled={generating}
          sx={{ flex: 2 }}
        >
          {generating ? 'Preparando...' : 'Vista Previa y Descargar PDF'}
        </Button>
      </Box>

      {/* PDF Preview Dialog */}
      {previewOpen && businessProfile && (
        <PDFPreviewDialog
          open={previewOpen}
          onClose={() => setPreviewOpen(false)}
          business={businessProfile}
          invoice={formData}
          invoiceNumber={generatedInvoiceNumber}
        />
      )}
    </Box>
  );
};
