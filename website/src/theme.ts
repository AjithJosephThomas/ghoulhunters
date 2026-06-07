import { createTheme, alpha } from '@mui/material/styles';
import { gradients, palette } from './theme/palette';

declare module '@mui/material/styles' {
  interface Palette {
    river: Palette['primary'];
    moss: Palette['primary'];
    sunrise: Palette['primary'];
    mist: Palette['primary'];
    invasive: Palette['primary'];
    coral: Palette['primary'];
    aqua: Palette['primary'];
    ninja: Palette['primary'];
    ochre: Palette['primary'];
  }
  interface PaletteOptions {
    river?: PaletteOptions['primary'];
    moss?: PaletteOptions['primary'];
    sunrise?: PaletteOptions['primary'];
    mist?: PaletteOptions['primary'];
    invasive?: PaletteOptions['primary'];
    coral?: PaletteOptions['primary'];
    aqua?: PaletteOptions['primary'];
    ninja?: PaletteOptions['primary'];
    ochre?: PaletteOptions['primary'];
  }
  interface Theme {
    gradients: typeof gradients;
  }
  interface ThemeOptions {
    gradients?: typeof gradients;
  }
}

export const theme = createTheme({
  gradients,
  palette: {
    mode: 'light',
    primary: {
      main: palette.yellow,
      light: palette.yellowLight,
      dark: palette.yellowDark,
      contrastText: palette.ink,
    },
    secondary: {
      main: palette.green,
      light: palette.greenLight,
      dark: palette.riverDark,
      contrastText: palette.white,
    },
    river: {
      main: palette.greenLight,
      light: palette.greenPale,
      dark: palette.green,
      contrastText: palette.ink,
    },
    moss: {
      main: palette.green,
      light: palette.greenLight,
      dark: palette.riverDark,
      contrastText: palette.white,
    },
    sunrise: {
      main: palette.yellow,
      light: palette.yellowLight,
      dark: palette.yellowDark,
      contrastText: palette.ink,
    },
    mist: {
      main: palette.grey,
      light: palette.white,
      dark: palette.greyMid,
      contrastText: palette.ink,
    },
    coral: {
      main: palette.alert,
      light: palette.alertPale,
      dark: '#B71C1C',
      contrastText: palette.white,
    },
    aqua: {
      main: palette.greenLight,
      light: palette.greenPale,
      dark: palette.green,
      contrastText: palette.ink,
    },
    ninja: {
      main: palette.ink,
      light: palette.stone,
      dark: palette.ink,
      contrastText: palette.white,
    },
    ochre: {
      main: palette.orange,
      light: palette.orangePale,
      dark: '#E65100',
      contrastText: palette.white,
    },
    invasive: {
      main: palette.alert,
      light: '#EF5350',
      dark: '#B71C1C',
      contrastText: palette.white,
    },
    background: {
      default: palette.offWhite,
      paper: palette.white,
    },
    text: {
      primary: palette.ink,
      secondary: palette.stone,
    },
    success: { main: palette.green },
    warning: { main: palette.orange },
    error: { main: palette.alert },
    info: { main: palette.green },
    divider: palette.greyMid,
  },
  typography: {
    fontFamily: '"Source Sans 3", system-ui, -apple-system, sans-serif',
    fontSize: 16,
    h1: {
      fontFamily: '"Fredoka", "Nunito", system-ui, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      color: palette.ink,
    },
    h2: {
      fontFamily: '"Fredoka", "Nunito", system-ui, sans-serif',
      fontWeight: 800,
      lineHeight: 1.2,
      color: palette.ink,
    },
    h3: {
      fontFamily: '"Nunito", system-ui, sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
      color: palette.ink,
    },
    h4: {
      fontFamily: '"Nunito", system-ui, sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
      color: palette.ink,
    },
    h5: {
      fontFamily: '"Nunito", system-ui, sans-serif',
      fontWeight: 700,
      lineHeight: 1.35,
      color: palette.ink,
    },
    h6: {
      fontFamily: '"Nunito", system-ui, sans-serif',
      fontWeight: 700,
      lineHeight: 1.4,
      color: palette.ink,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: palette.ink,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.65,
      color: palette.stone,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
      fontWeight: 600,
      color: palette.stone,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      fontFamily: '"Nunito", system-ui, sans-serif',
      fontSize: '0.9375rem',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: palette.offWhite,
          minHeight: '100vh',
          color: palette.ink,
        },
        '#root': {
          minHeight: '100vh',
        },
        '::selection': {
          background: alpha(palette.yellow, 0.5),
          color: palette.ink,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& strong': { color: palette.ink, fontWeight: 700 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '11px 26px',
          boxShadow: 'none',
          fontWeight: 800,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 6px 20px ${alpha(palette.ink, 0.12)}`,
          },
        },
        containedPrimary: {
          background: palette.yellow,
          color: palette.ink,
          boxShadow: `0 4px 0 ${palette.yellowDark}`,
          '&:hover': { background: palette.yellowDark, boxShadow: `0 6px 0 ${palette.yellowDark}` },
        },
        containedSecondary: {
          background: palette.green,
          color: palette.white,
          boxShadow: `0 4px 0 ${palette.riverDark}`,
          '&:hover': { background: palette.riverDark, boxShadow: `0 6px 0 ${palette.riverDark}` },
        },
        outlinedPrimary: {
          borderWidth: 2,
          borderColor: palette.ink,
          color: palette.ink,
          '&:hover': { borderWidth: 2, bgcolor: palette.grey },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${palette.greyMid}`,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          overflow: 'hidden',
          background: palette.white,
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: palette.white,
          color: palette.ink,
          boxShadow: 'none',
          borderBottom: `4px solid ${palette.yellow}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 4,
          fontSize: '0.8125rem',
          fontFamily: '"Nunito", sans-serif',
        },
        filled: {
          background: palette.yellow,
          color: palette.ink,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundColor: palette.greenPale,
          color: palette.ink,
          borderRadius: 8,
          border: `1px solid ${alpha(palette.green, 0.2)}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: palette.white,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: palette.green,
          fontWeight: 600,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          '&:hover': { color: palette.riverDark },
        },
      },
    },
  },
});
