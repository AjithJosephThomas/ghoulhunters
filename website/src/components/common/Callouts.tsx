import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Alert, Box, Paper, Typography, alpha } from '@mui/material';
import { ReactNode } from 'react';
import { palette } from '../../theme/palette';

export function BiodiversityCallout({ children }: { children: ReactNode }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        bgcolor: palette.greenPale,
        borderLeft: `4px solid ${palette.green}`,
        borderRadius: 2,
        border: `1px solid ${alpha(palette.green, 0.2)}`,
        borderLeftWidth: 4,
        borderLeftColor: palette.green,
      }}
    >
      <Typography component="div" sx={{ '& p': { m: 0 }, lineHeight: 1.75, fontSize: '1rem', color: palette.ink }}>
        {children}
      </Typography>
    </Paper>
  );
}

export function InvasiveCallout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        bgcolor: palette.alertPale,
        border: `1px solid ${alpha(palette.alert, 0.25)}`,
        borderRadius: 2,
      }}
    >
      {title && (
        <Typography variant="h6" color="error.main" gutterBottom sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
      )}
      <Typography component="div" sx={{ lineHeight: 1.75, color: palette.ink }}>{children}</Typography>
    </Paper>
  );
}

export function InfoAlert({ children }: { children: ReactNode }) {
  return (
    <Alert severity="info" sx={{ borderRadius: 2, mb: 3, fontSize: '1rem', lineHeight: 1.7 }}>
      <Box component="span">{children}</Box>
    </Alert>
  );
}

export function WarningBanner({ message }: { message: string }) {
  return (
    <Alert
      icon={<WarningAmberIcon fontSize="inherit" />}
      severity="warning"
      sx={{
        borderRadius: 0,
        justifyContent: 'center',
        bgcolor: palette.alert,
        color: palette.white,
        fontWeight: 700,
        fontSize: '0.9375rem',
        py: 0.75,
        '& .MuiAlert-icon': { color: palette.white },
      }}
    >
      <strong>{message}</strong>
    </Alert>
  );
}
