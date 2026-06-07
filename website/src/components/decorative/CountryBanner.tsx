import { Box, BoxProps } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { HeroArtwork, heroArtworkUrl } from '../../content/heroArtworks';

interface CountryArtworkBackgroundProps extends BoxProps {
  artwork: HeroArtwork;
  /** Gradient overlay strength — keeps text readable over the artwork */
  overlay?: 'light' | 'medium' | 'strong';
}

const overlays = {
  light: `linear-gradient(105deg, ${alpha('#0D1B4D', 0.55)} 0%, ${alpha('#0D1B4D', 0.3)} 50%, ${alpha('#0D1B4D', 0.2)} 100%)`,
  medium: `linear-gradient(105deg, ${alpha('#0D1B4D', 0.82)} 0%, ${alpha('#0D1B4D', 0.6)} 48%, ${alpha('#0D1B4D', 0.45)} 100%)`,
  strong: `linear-gradient(105deg, ${alpha('#0D1B4D', 0.92)} 0%, ${alpha('#0D1B4D', 0.78)} 55%, ${alpha('#0D1B4D', 0.65)} 100%)`,
};

/** Theme-tinted overlay — land ochre, water navy, sky purple */
const themeTints: Record<HeroArtwork['theme'], string> = {
  land: `linear-gradient(105deg, ${alpha('#5D4037', 0.35)} 0%, transparent 60%)`,
  water: `linear-gradient(105deg, ${alpha('#0D47A1', 0.25)} 0%, transparent 55%)`,
  sky: `linear-gradient(105deg, ${alpha('#4A148C', 0.2)} 0%, transparent 50%)`,
  country: 'transparent',
};

/**
 * Aboriginal artwork as a full-bleed hero background.
 * Each page can show a different painting or focal point.
 */
export function CountryArtworkBackground({
  artwork,
  overlay = 'medium',
  sx,
  ...props
}: CountryArtworkBackgroundProps) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroArtworkUrl(artwork.file)})`,
          backgroundSize: 'cover',
          backgroundPosition: artwork.position,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: overlays[overlay] }} />
      {artwork.theme !== 'country' && (
        <Box sx={{ position: 'absolute', inset: 0, background: themeTints[artwork.theme] }} />
      )}
    </Box>
  );
}
