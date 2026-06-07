import { Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
import { categoryColors, palette } from '../../theme/palette';

interface IconBadgeProps {
  icon: SvgIconComponent;
  size?: 'sm' | 'md' | 'lg';
  colorIndex?: number;
  label?: string;
  /** When false, skips hover animation (for decorative / non-interactive contexts). */
  interactive?: boolean;
}

/** Colourful bouncy icon badge — kids.earth.org / NatGeo Kids style */
export function IconBadge({ icon: Icon, size = 'md', colorIndex = 0, label, interactive = true }: IconBadgeProps) {
  const reduceMotion = useReducedMotion();
  const colors = categoryColors[colorIndex % categoryColors.length];
  const dimensions = { sm: 44, md: 52, lg: 68 }[size];
  const iconSize = { sm: 24, md: 28, lg: 36 }[size];
  const canAnimate = interactive && !reduceMotion;

  return (
    <Box
      component={canAnimate ? motion.div : 'div'}
      whileHover={canAnimate ? { scale: 1.12, rotate: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
      role={label ? 'img' : undefined}
      aria-label={label}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions,
        height: dimensions,
        borderRadius: '22%',
        bgcolor: colors.bg,
        color: colors.fg,
        flexShrink: 0,
        boxShadow: `0 6px 18px ${alpha(colors.bg, 0.5)}`,
        border: `3px solid ${alpha(palette.white, 0.85)}`,
      }}
    >
      <Icon sx={{ fontSize: iconSize }} />
    </Box>
  );
}
