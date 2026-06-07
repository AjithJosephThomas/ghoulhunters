import { Box, BoxProps } from '@mui/material';
import { useReducedMotion } from 'framer-motion';

interface RiverSceneProps extends BoxProps {
  intensity?: 'subtle' | 'full';
}

/** Ripples scattered across the full hero background */
const rippleCentres = [
  { left: '6%', top: '10%' },
  { left: '18%', top: '14%' },
  { left: '32%', top: '8%' },
  { left: '48%', top: '12%' },
  { left: '62%', top: '9%' },
  { left: '78%', top: '13%' },
  { left: '92%', top: '11%' },
  { left: '10%', top: '26%' },
  { left: '26%', top: '30%' },
  { left: '42%', top: '24%' },
  { left: '56%', top: '28%' },
  { left: '72%', top: '25%' },
  { left: '88%', top: '29%' },
  { left: '8%', top: '42%' },
  { left: '22%', top: '46%' },
  { left: '38%', top: '40%' },
  { left: '52%', top: '44%' },
  { left: '66%', top: '41%' },
  { left: '82%', top: '45%' },
  { left: '94%', top: '43%' },
  { left: '12%', top: '58%' },
  { left: '28%', top: '62%' },
  { left: '44%', top: '56%' },
  { left: '58%', top: '60%' },
  { left: '74%', top: '57%' },
  { left: '86%', top: '61%' },
  { left: '6%', top: '74%' },
  { left: '20%', top: '78%' },
  { left: '36%', top: '72%' },
  { left: '50%', top: '76%' },
  { left: '64%', top: '73%' },
  { left: '80%', top: '77%' },
  { left: '92%', top: '75%' },
  { left: '14%', top: '88%' },
  { left: '34%', top: '90%' },
  { left: '54%', top: '86%' },
  { left: '72%', top: '89%' },
  { left: '88%', top: '87%' },
];

const ringsPerCentre = 3;
const rippleCycleS = 5;
const centrePhaseS = 0.55;

/** Soft expanding ripples over hero backgrounds — three rings per splash, looping burst */
export function RiverScene({ intensity = 'full', sx, ...props }: RiverSceneProps) {
  const reduceMotion = useReducedMotion();
  const centreCount = intensity === 'full' ? rippleCentres.length : 14;

  if (reduceMotion) return null;

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        '--ripple-cycle': `${rippleCycleS}s`,
        ...sx,
      }}
      {...props}
    >
      {rippleCentres.slice(0, centreCount).flatMap((centre, ci) =>
        Array.from({ length: ringsPerCentre }, (_, ri) => (
          <Box
            key={`${ci}-${ri}`}
            className={`ripple-ring ripple-ring--river ripple-ring--layer-${ri}`}
            sx={{
              left: centre.left,
              top: centre.top,
              width: 24 + (ci % 5) * 4,
              height: 24 + (ci % 5) * 4,
              /* Negative delay = phased start that stays aligned on every repeat */
              animationDelay: `${-((ci * centrePhaseS) % rippleCycleS)}s`,
            }}
          />
        )),
      )}
    </Box>
  );
}
