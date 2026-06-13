import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box, Button, Paper, Typography, alpha } from '@mui/material';
import { siteConfig } from '../../config';
import { palette } from '../../theme/palette';
import { Reveal } from './Reveal';

export function ReportBox() {
  const { biosecurity, site } = siteConfig;

  return (
    <Reveal>
      <Paper
        id="report-biosecurity"
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: 'center',
          bgcolor: palette.white,
          border: `3px solid ${palette.yellow}`,
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
            bgcolor: alpha(palette.yellow, 0.25),
            color: palette.green,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.5,
            border: `2px solid ${alpha(palette.yellow, 0.5)}`,
          }}
        >
          <PhoneInTalkIcon sx={{ fontSize: 34 }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: palette.ink, fontFamily: '"Nunito", sans-serif' }}>
          Report to {biosecurity.authority}
        </Typography>
        <Typography sx={{ mb: 2, color: palette.stone, fontSize: '1rem', maxWidth: 560, mx: 'auto' }}>
          Reporting to {biosecurity.authority} is the <strong>official</strong> way to report suspected pests.
          Use the details below for reference, or if you prefer not to use the {site.name} app.
        </Typography>
        <Typography sx={{ mb: 2, color: palette.stone, fontSize: '1rem' }}>
          Within <strong>{biosecurity.reportHours} hours</strong> of a suspected sighting:
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: '0.04em',
            mb: 2,
            color: palette.ink,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontFamily: '"Fredoka", "Nunito", sans-serif',
          }}
        >
          {biosecurity.phone}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href={biosecurity.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        >
          Report online
        </Button>
        <Typography variant="body2" sx={{ mt: 2, color: palette.stone }}>
          {site.name} supports community awareness — {biosecurity.authority} remains the official authority.
        </Typography>
      </Paper>
    </Reveal>
  );
}
