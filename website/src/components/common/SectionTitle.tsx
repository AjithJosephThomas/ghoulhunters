import { Box, Typography, TypographyProps } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { palette } from '../../theme/palette';

interface SectionTitleProps extends TypographyProps {
  children: ReactNode;
  icon?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionTitle({ children, icon, align = 'center', sx, ...props }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component={reduceMotion ? 'div' : motion.div}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        mb: 3,
        textAlign: align,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: 1,
      }}
    >
      {icon && (
        <Box
          component={reduceMotion ? 'div' : motion.div}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {icon}
        </Box>
      )}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontFamily: '"Fredoka", "Nunito", sans-serif',
          color: palette.ink,
          fontSize: { xs: '1.55rem', md: '1.85rem' },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Typography>
      <Box
        component={reduceMotion ? 'div' : motion.div}
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        sx={{
          width: align === 'center' ? 56 : 48,
          height: 5,
          bgcolor: palette.yellow,
          borderRadius: 1,
          transformOrigin: align === 'center' ? 'center' : 'left',
        }}
      />
    </Box>
  );
}
