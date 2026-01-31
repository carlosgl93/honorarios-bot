import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Business, Description, History as HistoryIcon, Receipt } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@mui/material';

import { useAuth } from '@/contexts/AuthContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const quickActions = [
    {
      title: 'Nueva Factura',
      description: 'Crear y generar factura en formato PDF',
      icon: <Description sx={{ fontSize: 48 }} />,
      color: 'primary.main',
      action: () => navigate('/nueva-factura'),
    },
    {
      title: 'Mis Facturas',
      description: 'Ver y descargar facturas anteriores',
      icon: <HistoryIcon sx={{ fontSize: 48 }} />,
      color: 'secondary.main',
      action: () => navigate('/facturas'),
    },
    {
      title: 'Perfil de Negocio',
      description: 'Configurar datos de tu empresa',
      icon: <Business sx={{ fontSize: 48 }} />,
      color: 'info.main',
      action: () => navigate('/perfil-negocio'),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Receipt sx={{ fontSize: 48, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1">
            Generador de Facturas
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          Crea facturas profesionales para tu negocio
        </Typography>
      </Box>

      <Paper
        sx={{
          p: 3,
          mb: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          👋 Bienvenido{user?.email ? ` (${user.email})` : ''}
        </Typography>
        <Typography variant="body1">
          Genera facturas profesionales con tu información comercial. Descarga en PDF y envía a tus
          clientes de forma instantánea.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {quickActions.map((action, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={action.action}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Box sx={{ color: action.color, mb: 2 }}>{action.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {action.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {action.description}
                </Typography>
                <Button variant="outlined" fullWidth>
                  Ir
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📄 Cómo funciona
          </Typography>
          <Box component="ol" sx={{ pl: 2 }}>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Configura tu perfil de negocio con tus datos comerciales
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Completa el formulario con los datos del cliente y servicios
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Agrega los ítems de tu factura con descripción, cantidad y precio
            </Typography>
            <Typography component="li" variant="body2" sx={{ mb: 1 }}>
              Genera automáticamente el PDF con cálculo de IVA (19%)
            </Typography>
            <Typography component="li" variant="body2">
              Descarga y envía a tu cliente de inmediato
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
