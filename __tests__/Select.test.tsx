import React from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithContext } from '../test-utils';

import { Select } from '../components/Select/Select';

const optionsMock = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
    subtitle: 'This option is ab',
  },
  {
    value: '3',
    label: 'Option 3',
  },
];

describe('<SelectWrapper />', () => {
  it('render base select', async () => {
    const currentValue = '1';
    const label = 'Option 2';
    const changeOption = jest.fn();

    const { getByText, getByRole } = renderWithContext(
      <Select
        value={currentValue}
        onChange={changeOption}
        options={optionsMock}
        optionsTitle="Size"
      />,
    );

    getByText(currentValue);

    fireEvent.press(getByRole('combobox'));

    await waitFor(() => {
      getByText(label);
    });

    await act(async () => {
      await fireEvent.press(getByText(label));
    });

    expect(changeOption).toHaveBeenCalled();
  });
});
