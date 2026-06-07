import MenuIcon from '@mui/icons-material/Menu';
import { RiverBridgeIcon } from '../common/RiverBridgeIcon';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  alpha,
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { activePrograms, siteConfig } from '../../config';
import { palette } from '../../theme/palette';
import { WarningBanner } from '../common/Callouts';

interface HeaderProps {
  warningMessage?: string;
}

export function Header({ warningMessage }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { site, nav, biosecurity } = siteConfig;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navPrograms = activePrograms().filter((p) => p.showInNav);

  return (
    <>
      <AppBar position="sticky" elevation={0} color="default">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, gap: 2 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  bgcolor: palette.yellow,
                  color: palette.ink,
                }}
              >
                <RiverBridgeIcon sx={{ fontSize: 28 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1, color: palette.ink }}>
                {site.name}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flexWrap: 'wrap', ml: 'auto' }}>
              {nav.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: palette.ink,
                    fontWeight: isActive(item.path) ? 800 : 600,
                    bgcolor: isActive(item.path) ? palette.yellow : 'transparent',
                    borderRadius: 1,
                    fontSize: '0.9rem',
                    px: 1.5,
                    '&:hover': { bgcolor: alpha(palette.yellow, 0.5) },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {navPrograms.map((p) => (
                <Button
                  key={p.id}
                  component={Link}
                  to={`/species/${p.id}`}
                  size="small"
                  sx={{
                    color: palette.green,
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    bgcolor: location.pathname.includes(p.id) ? palette.greenPale : 'transparent',
                    borderRadius: 1,
                    '&:hover': { bgcolor: palette.greenPale },
                  }}
                >
                  {p.name}
                </Button>
              ))}
            </Box>

            <IconButton
              sx={{ display: { md: 'none' }, color: palette.ink }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <WarningBanner message={warningMessage ?? biosecurity.defaultWarning} />

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <Typography variant="h6" sx={{ fontWeight: 800, px: 2, pb: 2 }}>
            Menu
          </Typography>
          <List>
            {nav.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                onClick={() => setOpen(false)}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: palette.yellowLight,
                    borderLeft: `4px solid ${palette.yellow}`,
                  },
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
              </ListItemButton>
            ))}
            {navPrograms.map((p) => (
              <ListItemButton
                key={p.id}
                component={Link}
                to={`/species/${p.id}`}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={p.name} secondary="Species guide" />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
