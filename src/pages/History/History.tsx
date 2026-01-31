import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Add, History as HistoryIcon, Refresh } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useAtom } from 'jotai';

import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/services/api-client';
import { boletasHistoryAtom } from '@/store/atoms';
import { BoletaData } from '@/types/boleta';

export const History = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [boletas, setBoletas] = useAtom(boletasHistoryAtom);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      loadBoletas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user) {
    return null;
  }

  const loadBoletas = async () => {
    setLoading(true);
    setError('');

    try {
      const userBoletas = await apiClient.getUserBoletas();
      setBoletas(userBoletas);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar boletas');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: BoletaData['status']) => {
    switch (status) {
      case 'issued':
        return 'success';
      case 'processing':
        return 'info';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: BoletaData['status']) => {
    switch (status) {
      case 'issued':
        return 'Emitida';
      case 'processing':
        return 'Procesando';
      case 'failed':
        return 'Fallida';
      case 'draft':
        return 'Borrador';
      default:
        return status;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HistoryIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h4" component="h1">
            Historial de Boletas
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={loadBoletas}
            disabled={loading}
          >
            Actualizar
          </Button>
          <Button variant="contained" startIcon={<Add />} onClick={() => navigate('/nueva-boleta')}>
            Nueva Boleta
          </Button>
        </Box>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : boletas.length === 0 ? (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No hay boletas registradas
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Crea tu primera boleta de honorarios automáticamente
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate('/nueva-boleta')}
            >
              Crear Primera Boleta
            </Button>
          </CardContent>
        </Card>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Receptor</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell align="right">Monto Bruto</TableCell>
                <TableCell align="right">Líquido</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Folio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boletas.map((boleta) => (
                <TableRow key={boleta.id} hover>
                  <TableCell>{new Date(boleta.emissionDate).toLocaleDateString('es-CL')}</TableCell>
                  <TableCell>
                    <Typography variant="body2">{boleta.receptorName}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {boleta.receptorRut}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ maxWidth: 300 }} noWrap>
                      {boleta.serviceDescription}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">${boleta.totalAmount.toLocaleString('es-CL')}</TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" fontWeight="bold">
                      ${boleta.netAmount.toLocaleString('es-CL')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(boleta.status)}
                      color={getStatusColor(boleta.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{boleta.folio || boleta.boletaNumber || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {boletas.length > 0 && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Resumen
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Boletas
                </Typography>
                <Typography variant="h5">{boletas.length}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Monto Total Bruto
                </Typography>
                <Typography variant="h5">
                  ${boletas.reduce((sum, b) => sum + b.totalAmount, 0).toLocaleString('es-CL')}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Líquido
                </Typography>
                <Typography variant="h5" color="success.main">
                  ${boletas.reduce((sum, b) => sum + b.netAmount, 0).toLocaleString('es-CL')}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
