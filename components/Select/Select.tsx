import React from 'react';
import { Text, Pressable } from 'react-native';

import { showActionSheet } from '../../utils/showActionSheet';

import { SheetOptions } from '../OptionSheet';

export type SelectProps<T> = {
  value: T;
  options: SheetOptions<T>[];
  optionsTitle: string;
  onChange: (selectedItem: T) => void;
};

export function Select<T>({
  value,
  options,
  optionsTitle,
  onChange,
}: SelectProps<T>) {
  return (
    <Pressable
      accessibilityRole="combobox"
      onPress={() => {
        showActionSheet<'SelectOptionSheet', T>('SelectOptionSheet', {
          payload: {
            headerTitle: optionsTitle,
            options,
            onOptionChange: onChange,
          },
        });
      }}
      style={{
        width: 90,
        padding: 10,
        borderWidth: 1,
      }}
    >
      <Text>{value}</Text>
    </Pressable>
  );
}
