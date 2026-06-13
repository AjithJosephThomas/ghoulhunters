import { useWindowDimensions } from 'react-native';

/** Shortest edge ≥ 600pt — phones in landscape, small tablets, iPad mini */
export const TABLET_BREAKPOINT = 600;

/** Shortest edge ≥ 900pt — iPad Pro, large Android tablets */
export const LARGE_TABLET_BREAKPOINT = 900;

export function useResponsiveLayout() {
  const { width, height } = useWindowDimensions();
  const shortest = Math.min(width, height);
  const isTablet = shortest >= TABLET_BREAKPOINT;
  const isLargeTablet = shortest >= LARGE_TABLET_BREAKPOINT;

  return {
    width,
    height,
    isTablet,
    isLargeTablet,
    contentMaxWidth: isLargeTablet ? 720 : isTablet ? 600 : width,
    horizontalPadding: isTablet ? 32 : 20,
    cameraHeight: isLargeTablet ? 440 : isTablet ? 380 : Math.min(320, width * 0.72),
  };
}
