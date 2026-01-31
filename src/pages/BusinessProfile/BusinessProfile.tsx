import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Business, Save } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { useSetAtom } from 'jotai';

import { useAuth } from '@/contexts/AuthContext';
import { getBusinessProfile, saveBusinessProfile } from '@/services/firestore';
import { businessProfileAtom, hasBusinessProfileAtom } from '@/store/invoice-atoms';
import { BusinessFormData, REGIONES_CHILE } from '@/types/business';
import { formatRUT, validateRUT } from '@/types/invoice';

export const BusinessProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const setBusinessProfile = useSetAtom(businessProfileAtom);
  const setHasBusinessProfile = useSetAtom(hasBusinessProfileAtom);

  const [formData, setFormData] = useState<BusinessFormData>({
    nombreEmpresa: '',
    tipoNegocio: 'persona_natural',
    rut: '',
    giro: '',
    email: user?.email || '',
    telefono: '',
    sitioWeb: '',
    direccion: '',
    comuna: '',
    ciudad: '',
    region: 'Región Metropolitana',
  });

  const [loading, setLoading] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Load existing business profile
  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;

      try {
        const profile = await getBusinessProfile(user.uid);
        if (profile) {
          setFormData({
            nombreEmpresa: profile.nombreEmpresa,
            tipoNegocio: profile.tipoNegocio,
            rut: profile.rut,
            giro: profile.giro || '',
            email: profile.email,
            telefono: profile.telefono || '',
            sitioWeb: profile.sitioWeb || '',
            direccion: profile.direccion,
            comuna: profile.comuna,
            ciudad: profile.ciudad,
            region: profile.region,
          });
          setBusinessProfile(profile);
          setHasBusinessProfile(true);
        }
      } catch (err) {
        console.error('Error loading business profile:', err);
      } finally {
        setLoadingProfile(false);
      }
    };

    loadProfile();
  }, [user, setBusinessProfile, setHasBusinessProfile]);

  const handleInputChange =
    (field: keyof BusinessFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = e.target.value;

      // Formatear RUT automáticamente
      if (field === 'rut') {
        value = formatRUT(value);
      }

      setFormData({ ...formData, [field]: value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validación
    if (!formData.nombreEmpresa || !formData.rut || !formData.email) {
      setError('Por favor complete los campos obligatorios');
      return;
    }

    if (!validateRUT(formData.rut)) {
      setError('RUT inválido');
      return;
    }

    setLoading(true);

    try {
      // Save to Firestore
      const profile = {
        userId: user!.uid,
        ...formData,
        formatoNumeroFactura: 'FACT-{YYYY}-{####}',
        siguienteNumeroFactura: 1,
      };

      await saveBusinessProfile(profile);

      // Update local state
      const savedProfile = {
        ...profile,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setBusinessProfile(savedProfile);
      setHasBusinessProfile(true);
      setSuccess(true);

      setTimeout(() => {
        navigate('/nueva-boleta');
      }, 1500);
    } catch (err) {
      console.error('Error saving business profile:', err);
      setError(err instanceof Error ? err.message : 'Error al guardar perfil');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  if (loadingProfile) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Business sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          Perfil de Negocio
        </Typography>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Complete la información de su negocio para comenzar a generar facturas profesionales.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          ¡Perfil guardado exitosamente! Redirigiendo...
        </Alert>
      )}

      <Card>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Información del Negocio
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  required
                  label="Nombre del Negocio / Razón Social"
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange('nombreEmpresa')}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required>
                  <InputLabel>Tipo</InputLabel>
                  <Select
                    value={formData.tipoNegocio}
                    label="Tipo"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tipoNegocio: e.target.value as 'persona_natural' | 'empresa',
                      })
                    }
                    disabled={loading}
                  >
                    <MenuItem value="persona_natural">Persona Natural</MenuItem>
                    <MenuItem value="empresa">Empresa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="RUT"
                  value={formData.rut}
                  onChange={handleInputChange('rut')}
                  placeholder="12.345.678-9"
                  disabled={loading}
                  error={formData.rut !== '' && !validateRUT(formData.rut)}
                  helperText={
                    formData.rut !== '' && !validateRUT(formData.rut) ? 'RUT inválido' : ''
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Giro"
                  value={formData.giro}
                  onChange={handleInputChange('giro')}
                  placeholder="Ej: Servicios de consultoría"
                  disabled={loading}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
              Información de Contacto
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange('telefono')}
                  placeholder="+56 9 1234 5678"
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sitio Web"
                  value={formData.sitioWeb}
                  onChange={handleInputChange('sitioWeb')}
                  placeholder="https://www.ejemplo.cl"
                  disabled={loading}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
              Dirección
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Dirección"
                  value={formData.direccion}
                  onChange={handleInputChange('direccion')}
                  placeholder="Calle, número, oficina/depto"
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  required
                  label="Comuna"
                  value={formData.comuna}
                  onChange={handleInputChange('comuna')}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  required
                  label="Ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange('ciudad')}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required>
                  <InputLabel>Región</InputLabel>
                  <Select
                    value={formData.region}
                    label="Región"
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    disabled={loading}
                  >
                    {REGIONES_CHILE.map((region) => (
                      <MenuItem key={region} value={region}>
                        {region}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              startIcon={loading ? <CircularProgress size={20} /> : <Save />}
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? 'Guardando...' : 'Guardar Perfil'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
