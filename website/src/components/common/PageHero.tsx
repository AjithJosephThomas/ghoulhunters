import { Box, Container, Typography, alpha } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { getHeroArtworkForPath, HeroArtwork } from '../../content/heroArtworks';
import { palette } from '../../theme/palette';
import { CountryArtworkBackground } from '../decorative/CountryBanner';
import { RiverScene } from '../decorative/RiverScene';
import { kidsWhitePanel } from './artworkHero';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
  artwork?: HeroArtwork;
}

export function PageHero({ title, subtitle, children, compact, artwork }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const heroArt = artwork ?? getHeroArtworkForPath(pathname);

  return (
    <Box
      component={motion.section}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: compact ? { xs: 4, md: 5 } : { xs: 5, md: 6 },
      }}
    >
      <CountryArtworkBackground artwork={heroArt} overlay="light" />
      <RiverScene intensity={compact ? 'subtle' : 'full'} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            ...kidsWhitePanel,
            p: compact
              ? { xs: 2.5, md: 3, pt: { xs: 3, md: 3.5 } }
              : { xs: 3, md: 4, pt: { xs: 3.5, md: 4.5 } },
            maxWidth: 800,
          }}
        >
          <Typography
            component={motion.h1}
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            variant="h2"
            sx={{
              fontSize: compact ? { xs: '1.65rem', md: '2.05rem' } : { xs: '1.9rem', md: '2.4rem' },
              fontWeight: 900,
              fontFamily: '"Fredoka", "Nunito", sans-serif',
              color: palette.ink,
              mb: subtitle ? 1 : 0,
              lineHeight: 1.15,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component={motion.p}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              variant="subtitle1"
              sx={{ color: palette.stone, maxWidth: 640, lineHeight: 1.6 }}
            >
              {subtitle}
            </Typography>
          )}
          <Box
            component={motion.div}
            initial={reduceMotion ? false : { width: 0 }}
            animate={{ width: 56 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            sx={{ height: 5, bgcolor: palette.yellow, borderRadius: 1, mt: 1.5, mb: children ? 1 : 0 }}
          />
          {children}
        </Box>
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
