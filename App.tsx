import './components/ActionSheets';

import React, { useState } from 'react';
import { View } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';

import { Select } from './components/Select';

const optionsMock = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
    subtitle: 'Option with subtitle',
  },
  {
    value: '3',
    label: 'Option 3',
  },
];

const RenderApp = () => {
  const [selectedValue, setSelectedValue] = useState('1');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Select
        value={selectedValue}
        options={optionsMock}
        optionsTitle="Sizes"
        onChange={setSelectedValue}
      />
    </View>
  );
};

const App = () => {
  return (
    <SheetProvider>
      <RenderApp />
    </SheetProvider>
  );
};

export default App;
