import React, { PropsWithChildren } from 'react';
import ActionSheetRN from 'react-native-actions-sheet';
import { View, Text, Pressable } from 'react-native';

type ActionSheetProps = {
  id: string;
  headerTitle: string;
  onClose: () => void;
};

export function ActionSheet({
  id,
  headerTitle,
  children,
  onClose,
}: PropsWithChildren<ActionSheetProps>) {
  return (
    <ActionSheetRN id={id} onClose={onClose}>
      <View>
        <View style={{ borderBottomWidth: 1 }}>
          <Pressable onPress={onClose} hitSlop={20} style={{ padding: 10 }}>
            <Text>{headerTitle}</Text>
          </Pressable>
        </View>
        {children}
      </View>
    </ActionSheetRN>
  );
}
