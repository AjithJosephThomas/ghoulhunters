import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Box, Button, Container, Grid, Stack, Typography, alpha } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config';
import { getHeroArtworkForPath } from '../../content/heroArtworks';
import { scrollToSection } from '../../utils/scrollToSection';
import { kidsWhitePanel } from '../common/artworkHero';
import { palette } from '../../theme/palette';
import { IconBadge } from '../common/IconBadge';
import { CountryArtworkBackground } from '../decorative/CountryBanner';
import { FloatingKidsDecor } from '../decorative/FloatingKidsDecor';
import { RiverScene } from '../decorative/RiverScene';

const journeyStops = [
  { label: 'Brisbane River', desc: 'Learn along our waterways', icon: WaterDropIcon, color: 0 },
  { label: 'Kedron Brook', desc: 'Explore your local brook', icon: MapIcon, color: 1 },
  { label: 'Spot & report', desc: 'See something? Tell the experts', icon: VisibilityIcon, color: 2 },
  { label: 'Snap a photo', desc: 'From a safe distance only', icon: CameraAltIcon, color: 3 },
];

const panelPad = { xs: 3, md: 4, pt: { xs: 3.5, md: 4.5 } };

export function HomeHero() {
  const { site, biosecurity } = siteConfig;
  const reduceMotion = useReducedMotion();
  const heroArt = getHeroArtworkForPath('/');

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 5, md: 8 },
      }}
    >
      <CountryArtworkBackground artwork={heroArt} overlay="light" />
      <RiverScene intensity="full" />
      <FloatingKidsDecor />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              sx={{ ...kidsWhitePanel, p: panelPad, height: '100%' }}
            >
              <Typography
                component={motion.p}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                variant="overline"
                sx={{
                  display: 'block',
                  mb: 2,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: palette.green,
                }}
              >
                🌿 Brisbane River & Kedron Brook
              </Typography>

              <Typography
                component={motion.h1}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variant="h1"
                sx={{
                  fontSize: { xs: '2.35rem', sm: '2.9rem', md: '3.4rem' },
                  fontWeight: 900,
                  fontFamily: '"Fredoka", "Nunito", sans-serif',
                  mb: 1.5,
                  color: palette.ink,
                  lineHeight: 1.1,
                }}
              >
                {site.name}
              </Typography>

              <Typography
                component={motion.p}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: palette.stone,
                  mb: 1,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.5,
                }}
              >
                {site.subtitle}
              </Typography>

              <Typography
                component={motion.p}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                sx={{
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: palette.stone,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.5,
                  mb: 3,
                  pl: 2,
                  borderLeft: `4px solid ${palette.yellow}`,
                  maxWidth: 480,
                }}
              >
                {site.tagline}
              </Typography>

              <Stack
                component={motion.div}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                flexWrap="wrap"
              >
                <Button
                  onClick={() => scrollToSection('invasive-species')}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Invasive species
                </Button>
                <Button component={Link} to="/spotter-rewards" variant="contained" color="secondary" size="large">
                  Spotter rewards
                </Button>
                <Button
                  href={biosecurity.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Official report
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              sx={{ ...kidsWhitePanel, p: { xs: 3, md: 3.5, pt: { xs: 3.5, md: 4 } }, height: '100%' }}
            >
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, letterSpacing: '0.1em', color: palette.green, display: 'block', mb: 2 }}
              >
                Your riverbank journey 🗺️
              </Typography>

              <Stack
                spacing={0}
                sx={{
                  position: 'relative',
                  pl: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 23,
                    top: 28,
                    bottom: 28,
                    width: 2,
                    bgcolor: palette.greyMid,
                    borderRadius: 1,
                  },
                }}
              >
                {journeyStops.map((stop, i) => (
                  <Box
                    key={stop.label}
                    component={motion.div}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.1, type: 'spring', stiffness: 200 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 1.5,
                      position: 'relative',
                    }}
                  >
                    <IconBadge icon={stop.icon} size="sm" colorIndex={stop.color} interactive={false} />
                    <Box sx={{ pt: 0.25 }}>
                      <Typography variant="caption" sx={{ color: palette.stoneLight, fontWeight: 700, letterSpacing: '0.06em' }}>
                        Stop {i + 1}
                      </Typography>
                      <Typography sx={{ fontWeight: 800, lineHeight: 1.2, color: palette.ink, fontFamily: '"Nunito", sans-serif' }}>
                        {stop.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                        {stop.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Typography
        variant="caption"
        sx={{
          position: 'absolute',
          bottom: 14,
          right: 16,
          zIndex: 3,
          color: alpha(palette.white, 0.9),
          fontWeight: 600,
          textShadow: `0 1px 4px ${alpha('#000', 0.45)}`,
        }}
      >
        {heroArt.credit}
      </Typography>
    </Box>
  );
}
