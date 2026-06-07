import { alpha } from '@mui/material/styles';
import { palette } from '../../theme/palette';

/** Solid white panel — readable text over artwork backgrounds */
export const kidsWhitePanel = {
  bgcolor: palette.white,
  borderRadius: 4,
  border: `2px solid ${palette.greyMid}`,
  boxShadow: `0 12px 40px ${alpha('#0D1B4D', 0.18)}`,
  position: 'relative' as const,
  overflow: 'hidden' as const,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    background: `linear-gradient(90deg, ${palette.yellow}, ${palette.green}, ${palette.orange}, ${palette.purple})`,
  },
} as const;

/** @deprecated Use kidsWhitePanel */
export const artworkGlassPanel = kidsWhitePanel;
