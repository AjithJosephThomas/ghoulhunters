import { Box, BoxProps } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps extends BoxProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export function Reveal({ children, delay = 0, direction = 'up', sx, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === 'up' ? { y: 32 } : direction === 'left' ? { x: -32 } : { x: 32 };

  if (reduceMotion) {
    return (
      <Box sx={sx} {...props}>
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
}

interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  sx?: BoxProps['sx'];
}

export function StaggerGrid({ children, stagger = 0.08, sx }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Box sx={sx}>{children}</Box>;
  }

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      sx={sx}
    >
      {children}
    </Box>
  );
}

export function StaggerItem({ children, sx }: { children: ReactNode; sx?: BoxProps['sx'] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Box sx={sx}>{children}</Box>;
  }

  return (
    <Box
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
      }}
      sx={sx}
    >
      {children}
    </Box>
  );
}
