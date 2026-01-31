import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Google, LockOpen } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';

import { useAuth } from '@/contexts/AuthContext';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { apiClient } from '@/services/api-client';

export const Login = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp, signInWithGoogle } = useAuth();

  // Feature flags
  const enableGoogleSignIn = useFeatureFlag('enableGoogleSignIn');
  const enableSocialLogin = useFeatureFlag('enableSocialLogin');

  const [tabValue, setTabValue] = useState(0);

  // Firebase Auth credentials
  const [email, setEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // SII credentials
  const [rut, setRut] = useState('');
  const [siiPassword, setSiiPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/nueva-boleta');
    }
  }, [user, navigate]);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);

    try {
      if (!email || !authPassword) {
        setError('Por favor ingrese email y contraseña');
        setLoading(false);
        return;
      }

      if (!rut || !siiPassword) {
        setError('Por favor ingrese credenciales del SII');
        setLoading(false);
        return;
      }

      // Create Firebase account
      await signUp(email, authPassword);

      // Save SII credentials to backend
      await apiClient.saveCredentials(rut, siiPassword);

      // Navigate to boleta form
      navigate('/nueva-boleta');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear cuenta');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      if (!email || !authPassword) {
        setError('Por favor ingrese email y contraseña');
        setLoading(false);
        return;
      }

      // Sign in to Firebase
      await signIn(email, authPassword);

      // Navigate to boleta form
      navigate('/nueva-boleta');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithGoogle();
      navigate('/nueva-boleta');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión con Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LockOpen sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
            <Typography variant="h4" component="h1">
              SII Bot Login
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Crea una cuenta o inicia sesión para automatizar tus boletas de honorarios.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)} sx={{ mb: 3 }}>
            <Tab label="Iniciar Sesión" />
            <Tab label="Crear Cuenta" />
          </Tabs>

          {/* Firebase Auth Fields */}
          <TextField
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            sx={{ mb: 2 }}
            disabled={loading}
          />

          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
            placeholder="••••••••"
            sx={{ mb: 3 }}
            disabled={loading}
          />

          {/* SII Credentials (only for sign up) */}
          {tabValue === 1 && (
            <>
              <Divider sx={{ my: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  Credenciales SII
                </Typography>
              </Divider>

              <TextField
                fullWidth
                label="RUT SII"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                placeholder="12.345.678-9"
                sx={{ mb: 2 }}
                disabled={loading}
              />

              <TextField
                fullWidth
                type="password"
                label="Contraseña SII"
                value={siiPassword}
                onChange={(e) => setSiiPassword(e.target.value)}
                placeholder="••••••••"
                sx={{ mb: 3 }}
                disabled={loading}
              />
            </>
          )}

          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={tabValue === 0 ? handleSignIn : handleSignUp}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
            >
              {loading ? 'Procesando...' : tabValue === 0 ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </Button>

            {(enableGoogleSignIn || enableSocialLogin) && (
              <>
                <Divider>
                  <Typography variant="caption" color="text.secondary">
                    O
                  </Typography>
                </Divider>

                {enableGoogleSignIn && (
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    startIcon={<Google />}
                  >
                    Continuar con Google
                  </Button>
                )}
              </>
            )}
          </Box>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            🔒 Tus credenciales se encriptan antes de ser almacenadas
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
