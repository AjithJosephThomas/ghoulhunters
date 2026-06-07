import { createSvgIcon } from '@mui/material/utils';

/**
 * Story Bridge–style arch over water — Brisbane River & Kedron Brook logo mark.
 */
export const RiverBridgeIcon = createSvgIcon(
  <>
    {/* Water / brook */}
    <path
      d="M2 19.5c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0 4 1.5 6 0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      opacity={0.55}
    />
    <path
      d="M1 21.5h22"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      opacity={0.4}
    />
    {/* Bridge piers */}
    <path d="M7 15.5v3.5M17 15.5v3.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    {/* Deck */}
    <path d="M4 15h16" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    {/* Main arch (Story Bridge inspired) */}
    <path
      d="M6.5 15 V11.5 Q12 5.5 17.5 11.5 V15"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
    {/* Truss lines */}
    <path
      d="M9 15 L12 9.5 M15 15 L12 9.5"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      opacity={0.7}
    />
    {/* Riverbank / trees hint */}
    <path
      d="M3 17.5c0-2 1-3.5 2-4M21 17.5c0-2-1-3.5-2-4"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      opacity={0.45}
    />
  </>,
  'RiverBridge',
);
