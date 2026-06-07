import { Box } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { RiverBridgeIcon } from '../common/RiverBridgeIcon';
import { palette } from '../../theme/palette';

const floats = [
  { Icon: RiverBridgeIcon, x: '8%', y: '18%', size: 38, delay: 0 },
  { Icon: WaterDropIcon, x: '88%', y: '28%', size: 30, delay: 0.6 },
  { Icon: RiverBridgeIcon, x: '78%', y: '72%', size: 32, delay: 1.2 },
];

/** Playful floating river & bridge marks behind hero panels */
export function FloatingKidsDecor() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {floats.map(({ Icon, x, y, size, delay }, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [0, -14, 0],
            rotate: [0, 8, -8, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay },
            y: { duration: 5, repeat: Infinity, delay, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, delay },
            scale: { duration: 0.5, delay: delay + 0.2 },
          }}
          sx={{ position: 'absolute', left: x, top: y, color: palette.yellow }}
        >
          <Icon sx={{ fontSize: size, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' }} />
        </Box>
      ))}
    </Box>
  );
}
