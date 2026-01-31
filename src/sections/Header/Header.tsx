import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';

import { useNotifications } from '@toolpad/core/useNotifications';

import { title } from '@/config';
import { useSidebar } from '@/sections/Sidebar/hooks';
import { useThemeMode } from '@/theme';

import { getRandomJoke } from './utils';

function Header() {
  const { themeMode } = useThemeMode();
  const { open: openSidebar } = useSidebar();
  const notifications = useNotifications();

  function showNotification() {
    notifications.show(getRandomJoke(), {
      autoHideDuration: 5000,
    });
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={2}
      data-pw={`theme-${themeMode}`}
      enableColorOnDark
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={showNotification} color="info">
              {title}
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
