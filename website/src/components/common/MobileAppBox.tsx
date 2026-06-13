import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Box, Button, Paper, Typography, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config';
import { palette } from '../../theme/palette';
import { Reveal } from './Reveal';

const steps = [
  'Photograph the suspected pest from a safe distance — do not move it',
  'Tag the species in the app',
  'Submit — Bio Buddies handles the rest',
];

export function MobileAppBox() {
  const { site } = siteConfig;

  return (
    <Reveal>
      <Paper
        id="mobile-app"
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: 'center',
          bgcolor: palette.white,
          border: `3px solid ${palette.green}`,
          borderRadius: 4,
          my: 4,
          boxShadow: `0 8px 32px rgba(0,0,0,0.08)`,
          scrollMarginTop: 88,
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: alpha(palette.green, 0.12),
            color: palette.green,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.5,
            border: `2px solid ${alpha(palette.green, 0.35)}`,
          }}
        >
          <CameraAltIcon sx={{ fontSize: 34 }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: palette.ink, fontFamily: '"Nunito", sans-serif' }}>
          Use {site.name} mobile app
        </Typography>
        <Typography sx={{ mb: 2, color: palette.stone, fontSize: '1rem', maxWidth: 560, mx: 'auto' }}>
          The convenient way to report a sighting. Leave the pest in place, then:
        </Typography>
        <Box
          component="ul"
          sx={{
            textAlign: 'left',
            maxWidth: 480,
            mx: 'auto',
            mb: 2.5,
            pl: 2.5,
            color: palette.ink,
            lineHeight: 1.75,
            '& li': { mb: 0.5 },
          }}
        >
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </Box>
        <Button component={Link} to="/how-it-works" variant="contained" color="primary" size="large">
          How it works
        </Button>
        <Typography variant="body2" sx={{ mt: 2, color: palette.stone }}>
          Snap a photo, tag the species, and submit in seconds — {site.name} handles the rest.
        </Typography>
      </Paper>
    </Reveal>
  );
}
