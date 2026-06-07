import { Box, BoxProps } from '@mui/material';
import { palette } from '../../theme/palette';

type PatternVariant = 'dots' | 'diamonds' | 'waves';

interface AboriginalPatternProps extends BoxProps {
  variant?: PatternVariant;
  height?: number;
  opacity?: number;
}

/**
 * Decorative geometric bands inspired by Aboriginal & Torres Strait Islander
 * art motifs. Used as borders only — not representative cultural artwork.
 */
export function AboriginalPattern({
  variant = 'dots',
  height = 8,
  opacity = 0.9,
  sx,
  ...props
}: AboriginalPatternProps) {
  const patterns: Record<PatternVariant, string> = {
    dots: `url("data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='8' viewBox='0 0 24 8'>
        <circle cx='4' cy='4' r='2' fill='${palette.dotOchre}'/>
        <circle cx='12' cy='4' r='2' fill='${palette.dotWhite}'/>
        <circle cx='20' cy='4' r='2' fill='${palette.dotRust}'/>
      </svg>
    `)}")`,
    diamonds: `url("data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='8' viewBox='0 0 20 8'>
        <rect x='2' y='1' width='6' height='6' transform='rotate(45 5 4)' fill='${palette.dotOchre}'/>
        <rect x='10' y='1' width='6' height='6' transform='rotate(45 13 4)' fill='${palette.dotWhite}'/>
      </svg>
    `)}")`,
    waves: `url("data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='40' height='8' viewBox='0 0 40 8'>
        <path d='M0 4 Q5 1 10 4 T20 4 T30 4 T40 4' fill='none' stroke='${palette.orange}' stroke-width='2'/>
        <path d='M0 6 Q5 3 10 6 T20 6 T30 6 T40 6' fill='none' stroke='${palette.yellow}' stroke-width='1.5'/>
        <path d='M0 2 Q5 5 10 2 T20 2 T30 2 T40 2' fill='none' stroke='#4CAF50' stroke-width='1'/>
      </svg>
    `)}")`,
  };

  return (
    <Box
      aria-hidden
      sx={{
        height,
        width: '100%',
        opacity,
        backgroundImage: patterns[variant],
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        ...sx,
      }}
      {...props}
    />
  );
}
