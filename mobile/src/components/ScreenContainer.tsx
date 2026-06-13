import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ScrollViewProps, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { useResponsiveLayout } from '../theme/layout';

type ScreenContainerProps = {
  children: ReactNode;
  scroll?: boolean;
  centerContent?: boolean;
  contentContainerStyle?: ViewStyle;
  scrollViewProps?: Omit<ScrollViewProps, 'contentContainerStyle' | 'children'>;
};

export function ScreenContainer({
  children,
  scroll = true,
  centerContent = false,
  contentContainerStyle,
  scrollViewProps,
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();
  const { contentMaxWidth, horizontalPadding, isTablet } = useResponsiveLayout();

  const inner = (
    <View
      style={[
        styles.inner,
        {
          maxWidth: contentMaxWidth,
          paddingHorizontal: horizontalPadding,
          width: '100%',
          alignSelf: 'center',
        },
        contentContainerStyle,
      ]}
    >
      {children}
    </View>
  );

  const paddingStyle = {
    paddingTop: isTablet ? Math.max(insets.top, 8) : 0,
    paddingBottom: Math.max(insets.bottom, 24),
    paddingLeft: Math.max(insets.left, 0),
    paddingRight: Math.max(insets.right, 0),
  };

  if (scroll) {
    return (
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[
          styles.scrollContent,
          centerContent && styles.centeredScroll,
          paddingStyle,
        ]}
        keyboardShouldPersistTaps="handled"
        {...scrollViewProps}
      >
        {inner}
      </ScrollView>
    );
  }

  return <View style={[styles.flex, paddingStyle, centerContent && styles.centered]}>{inner}</View>;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  centeredScroll: {
    justifyContent: 'center',
  },
  centered: {
    justifyContent: 'center',
  },
  inner: {
    gap: 8,
  },
});
