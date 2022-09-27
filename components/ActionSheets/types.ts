export const ACTION_SHEET_LIST = {
  SelectOptionSheet: 'SelectOptionSheet',
} as const;

export type SheetId = typeof ACTION_SHEET_LIST[keyof typeof ACTION_SHEET_LIST];

export interface SheetProps<T> {
  sheetId: SheetId;
  payload: T;
}
