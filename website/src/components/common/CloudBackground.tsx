import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { palette } from '../../theme/palette';
import { AboriginalPattern } from '../decorative/AboriginalPattern';
import { RiverScene } from '../decorative/RiverScene';

interface CloudBackgroundProps {
  variant?: 'hero' | 'page';
}

export function CloudBackground({ variant = 'page' }: CloudBackgroundProps) {
  const isHero = variant === 'hero';

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {isHero ? (
        <RiverScene intensity="full" />
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '50%',
              height: '60%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(palette.sky, 0.5)} 0%, transparent 70%)`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '-5%',
              width: '40%',
              height: '50%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(palette.eucalyptus, 0.2)} 0%, transparent 70%)`,
            }}
          />
          <RiverScene intensity="subtle" sx={{ opacity: 0.5 }} />
        </>
      )}

      <AboriginalPattern
        variant="dots"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: isHero ? 0.5 : 0.35,
        }}
      />
    </Box>
  );
}
