import React from 'react';
import { Text, Pressable, View } from 'react-native';

export type RowItemProps = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export function RowItem({ title, subtitle, onPress }: RowItemProps) {
  return (
    <Pressable
      style={{ flex: 1, padding: 10 }}
      accessibilityRole="button"
      onPress={onPress}
    >
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
        {Boolean(subtitle) && <Text>{subtitle}</Text>}
      </View>
    </Pressable>
  );
}
