import { Fragment } from 'react';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import { AuthProvider } from '@/contexts/AuthContext';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';

import Pages from './routes/Pages';
import Header from './sections/Header';
import HotKeys from './sections/HotKeys';
import Sidebar from './sections/Sidebar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AuthProvider>
        <HotKeys />
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Pages />
        </BrowserRouter>
      </AuthProvider>
    </Fragment>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
