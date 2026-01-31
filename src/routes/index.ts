import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import LoginIcon from '@mui/icons-material/Login';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
  {
    component: asyncComponentLoader(() => import('@/pages/Dashboard')),
    path: '/',
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'Iniciar Sesión',
    icon: LoginIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/BusinessProfile')),
    path: '/perfil-negocio',
    title: 'Perfil de Negocio',
    icon: BusinessIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/InvoiceForm')),
    path: '/nueva-boleta',
    title: 'Nueva Boleta',
    icon: DescriptionIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/History')),
    path: '/facturas',
    title: 'Mis Facturas',
    icon: HistoryIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
];

export default routes;
