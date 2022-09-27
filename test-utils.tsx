import './components/ActionSheets';

import React, { PropsWithChildren, ReactElement } from 'react';
import { SheetProvider } from 'react-native-actions-sheet';
import { render } from '@testing-library/react-native';

export const renderWithContext = (component: ReactElement) =>
  render(component, {
    wrapper: ({ children }: PropsWithChildren<unknown>) => (
      <TestProviders>{children}</TestProviders>
    ),
  });

function TestProviders({ children }: PropsWithChildren<{}>) {
  return <SheetProvider>{children}</SheetProvider>;
}
