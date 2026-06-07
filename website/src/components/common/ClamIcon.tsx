import { createSvgIcon } from '@mui/material/utils';

/** Freshwater gold clam — bivalve shell logo mark */
export const ClamIcon = createSvgIcon(
  <>
    <path
      d="M12 3C7.5 3 4 6.2 4 10.5c0 2.8 1.4 5.3 3.6 6.8L12 21l4.4-3.7c2.2-1.5 3.6-4 3.6-6.8C20 6.2 16.5 3 12 3z"
      opacity={0.95}
    />
    <path
      d="M12 5.5c-3.2 0-5.8 2.4-5.8 5.3 0 1.8.9 3.4 2.3 4.4L12 18.2l3.5-3c1.4-1 2.3-2.6 2.3-4.4 0-2.9-2.6-5.3-5.8-5.3z"
      opacity={0.35}
    />
    <path
      d="M12 6v11M9 8.5h6M8.5 11h7M9 13.5h6"
      stroke="currentColor"
      strokeWidth={0.6}
      strokeLinecap="round"
      fill="none"
      opacity={0.5}
    />
  </>,
  'Clam',
);
