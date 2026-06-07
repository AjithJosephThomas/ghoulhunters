import {
  Box,
  Container,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { activePrograms, siteConfig } from '../../config';
import { palette } from '../../theme/palette';

export function Footer() {
  const { site, biosecurity } = siteConfig;
  const programs = activePrograms();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: palette.footer,
        color: palette.footerText,
        pt: 5,
        pb: 3,
        mt: 6,
        '& .MuiTypography-body2, & .MuiTypography-caption': {
          color: palette.footerText,
        },
        '& .MuiTypography-root strong': {
          color: palette.white,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: 2.5,
            mb: 4,
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.5, color: palette.yellow }}>
            Acknowledgement of Country
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.75, maxWidth: 720, color: palette.footerText }}>
            Nature Ninjas respectfully acknowledges the Traditional Custodians of the lands and waters we
            learn on — including the Brisbane River and Kedron Brook — and their continuing connection to
            Country. We pay our respects to Elders past and present.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr 1fr' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: palette.yellow }}>
              {site.name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 340, lineHeight: 1.7 }}>
              {site.subtitle} for {site.region} — biodiversity and invasive species education.
            </Typography>
            <Box component="figure" sx={{ m: 0, maxWidth: 140 }}>
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}images/qr/ghoulhunters-website-qr.png`}
                alt="QR code linking to the Nature Ninjas website"
                width={140}
                height={140}
                loading="lazy"
                sx={{ borderRadius: 1, bgcolor: palette.white, p: 0.5 }}
              />
              <Typography component="figcaption" variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                Scan to visit and share
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, color: palette.white }}>
              Official reporting
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, lineHeight: 1.7 }}>
              This site does <strong>not</strong> replace government reporting. If you see a suspected
              invasive species, <strong>do not move it</strong>. Report to {biosecurity.authority} within{' '}
              <strong>{biosecurity.reportHours} hours</strong>:
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 900, color: palette.yellow, mb: 1 }}>
              {biosecurity.phone}
            </Typography>
            <MuiLink
              href={biosecurity.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: palette.yellow, fontWeight: 700 }}
            >
              Report online (DPI Queensland)
            </MuiLink>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, color: palette.white }}>
              Watch programs
            </Typography>
            <Stack spacing={0.5} sx={{ mb: 2 }}>
              {programs.map((p) => (
                <MuiLink
                  key={p.id}
                  component={Link}
                  to={`/watch/${p.id}`}
                  sx={{ color: palette.footerText, fontWeight: 600, textDecoration: 'none', '&:hover': { color: palette.yellow } }}
                >
                  {p.watchProjectName}
                </MuiLink>
              ))}
            </Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, color: palette.white }}>
              Official resources
            </Typography>
            <Stack spacing={0.5}>
              {programs.flatMap((p) =>
                p.footerLinks.map((l) => (
                  <MuiLink
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: palette.footerText, fontSize: '0.875rem', '&:hover': { color: palette.yellow } }}
                  >
                    {l.label}
                  </MuiLink>
                )),
              )}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', mb: 2 }} />
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.72)' }}>
          © {site.year} {site.name} · {site.schoolName}, {site.schoolSuburb} · {site.schoolYearLevel}
        </Typography>
      </Container>
    </Box>
  );
}
