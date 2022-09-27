import React from 'react';
import { SheetManager } from 'react-native-actions-sheet';
import { FlatList } from 'react-native';

import { ActionSheet } from '../ActionSheet';
import { RowItem } from '../RowItem';

export type SheetOptions<T> = {
  value: T;
  label: string;
  subtitle?: string;
  subtitleColor?: string;
  disabled?: boolean;
};

export type OptionSheetProps<T> = {
  id: string;
  options: SheetOptions<T>[];
  headerTitle: string;
  descriptionComponent?: JSX.Element;
  onClose?: () => void;
  onOptionChange?: (value: T) => void;
};

export function OptionSheet<T>({
  id,
  options,
  headerTitle,
  descriptionComponent,
  onClose,
  onOptionChange,
}: OptionSheetProps<T>) {
  const handleClose = async () => {
    await SheetManager.hide(id);
    onClose?.();
  };

  return (
    <ActionSheet id={id} headerTitle={headerTitle} onClose={handleClose}>
      <FlatList
        data={options}
        keyExtractor={(item) => String(item.value)}
        ListHeaderComponent={descriptionComponent}
        renderItem={({ item }) => (
          <RowItem
            onPress={async () => {
              await handleClose();
              onOptionChange?.(item.value);
            }}
            title={item.label}
            subtitle={item.subtitle}
          />
        )}
      />
    </ActionSheet>
  );
}
