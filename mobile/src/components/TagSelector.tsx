import { Pressable, StyleSheet, Text, View } from 'react-native';
import { siteConfig } from '../constants/site';
import { colors } from '../theme/colors';
import type { ReportTag } from '../types';

interface TagSelectorProps {
  selectedTag: ReportTag | null;
  onSelect: (tag: ReportTag) => void;
}

const TAG_OPTIONS: { value: ReportTag; label: string }[] = [
  { value: 'asian_gold_clam', label: siteConfig.tags.asianGoldClam },
  { value: 'others', label: siteConfig.tags.others },
];

export function TagSelector({ selectedTag, onSelect }: TagSelectorProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>Suspected creature</Text>
      <View style={styles.options}>
        {TAG_OPTIONS.map((option) => {
          const selected = selectedTag === option.value;
          return (
            <Pressable
              key={option.value}
              style={[styles.chip, selected && styles.chipSelected]}
              onPress={() => onSelect(option.value)}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.ink,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  chipSelected: {
    borderColor: colors.green,
    backgroundColor: colors.greenPale,
  },
  chipText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.stone,
  },
  chipTextSelected: {
    color: colors.green,
  },
});
