import React from 'react';

import { SheetProps } from './types';
import { OptionSheet, OptionSheetProps } from '../OptionSheet';

export type SelectOptionSheetPayload<T> = Omit<OptionSheetProps<T>, 'id'>;

export function SelectOptionSheet<T>({
  sheetId,
  payload,
}: SheetProps<SelectOptionSheetPayload<T>>) {
  return <OptionSheet id={sheetId} {...payload} />;
}
