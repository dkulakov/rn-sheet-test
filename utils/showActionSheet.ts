import { SheetManager } from 'react-native-actions-sheet';

import { SheetId, SheetPayloads } from '../components/ActionSheets';

type Options<T> = {
  payload: T;
  context?: string;
};

export const showActionSheet = <T extends SheetId, U>(
  id: T,
  options: Options<SheetPayloads<U>[T]>,
) => SheetManager.show(id, options);
