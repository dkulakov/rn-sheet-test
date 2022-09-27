import { registerSheet } from 'react-native-actions-sheet';

import {
  SelectOptionSheet,
  SelectOptionSheetPayload,
} from './SelectOptionSheet';
import { ACTION_SHEET_LIST } from './types';

export { type SheetId } from './types';

registerSheet(ACTION_SHEET_LIST.SelectOptionSheet, SelectOptionSheet);

export type SheetPayloads<T> = {
  SelectOptionSheet: SelectOptionSheetPayload<T>;
};
