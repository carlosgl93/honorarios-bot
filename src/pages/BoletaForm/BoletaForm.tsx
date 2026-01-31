import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Description, PlayArrow } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';

import { useAtom } from 'jotai';

import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/services/api-client';
import { boletaFormAtom, botStatusAtom } from '@/store/atoms';

export const BoletaForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useAtom(boletaFormAtom);
  const [botStatus, setBotStatus] = useAtom(botStatusAtom);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleInputChange =
    (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate form
    if (
      !formData.receptorRut ||
      !formData.receptorName ||
      !formData.serviceDescription ||
      !formData.totalAmount
    ) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    try {
      // Set bot status
      setBotStatus({ isRunning: true, progress: 0, currentStep: 'Iniciando...' });

      // Call backend to create boleta
      const result = await apiClient.createBoleta(formData);

      setBotStatus({ isRunning: false, progress: 100, currentStep: 'Completado' });

      if (result.success) {
        setSuccess(`¡Boleta emitida exitosamente! Folio: ${result.folio}`);
        // Reset form
        setFormData({
          receptorRut: '',
          receptorName: '',
          receptorEmail: '',
          serviceDescription: '',
          serviceDate: new Date().toISOString().split('T')[0],
          totalAmount: '',
        });
        // Navigate to history after 2 seconds
        setTimeout(() => navigate('/historial'), 2000);
      } else {
        setError(result.error || 'Error al emitir la boleta');
      }
    } catch (err) {
      setBotStatus({ isRunning: false, progress: 0, currentStep: '' });
      setError(err instanceof Error ? err.message : 'Error inesperado');
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Description sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          Nueva Boleta de Honorarios
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {botStatus.isRunning && (
        <Card sx={{ mb: 3, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🤖 Bot en ejecución...
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {botStatus.currentStep}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={botStatus.progress}
              sx={{ height: 8, borderRadius: 4 }}
            />
            <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
              {botStatus.progress}% completado
            </Typography>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Datos del Receptor
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="RUT Receptor"
                  value={formData.receptorRut}
                  onChange={handleInputChange('receptorRut')}
                  placeholder="12.345.678-9"
                  disabled={botStatus.isRunning}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Nombre Receptor"
                  value={formData.receptorName}
                  onChange={handleInputChange('receptorName')}
                  placeholder="Nombre completo o razón social"
                  disabled={botStatus.isRunning}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Receptor (opcional)"
                  type="email"
                  value={formData.receptorEmail}
                  onChange={handleInputChange('receptorEmail')}
                  placeholder="email@ejemplo.cl"
                  disabled={botStatus.isRunning}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
              Datos del Servicio
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Descripción del Servicio"
                  value={formData.serviceDescription}
                  onChange={handleInputChange('serviceDescription')}
                  placeholder="Describe el servicio prestado..."
                  disabled={botStatus.isRunning}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Fecha del Servicio"
                  value={formData.serviceDate}
                  onChange={handleInputChange('serviceDate')}
                  InputLabelProps={{ shrink: true }}
                  disabled={botStatus.isRunning}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Monto Total (CLP)"
                  value={formData.totalAmount}
                  onChange={handleInputChange('totalAmount')}
                  placeholder="150000"
                  disabled={botStatus.isRunning}
                  inputProps={{ min: 0, step: 1 }}
                />
              </Grid>
            </Grid>

            {formData.totalAmount && (
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  <strong>Monto bruto:</strong> $
                  {parseInt(formData.totalAmount).toLocaleString('es-CL')}
                  <br />
                  <strong>Retención (10.75%):</strong> $
                  {((parseInt(formData.totalAmount) * 10.75) / 100).toLocaleString('es-CL')}
                  <br />
                  <strong>Líquido a recibir:</strong> $
                  {(parseInt(formData.totalAmount) * 0.8925).toLocaleString('es-CL')}
                </Typography>
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<PlayArrow />}
              disabled={botStatus.isRunning}
              sx={{ py: 1.5 }}
            >
              {botStatus.isRunning ? 'Emitiendo Boleta...' : 'Emitir Boleta Automáticamente'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        El bot se ejecutará en una ventana visible del navegador. No cierre la ventana hasta que
        finalice el proceso.
      </Typography>
    </Box>
  );
};
