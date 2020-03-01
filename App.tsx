import React from 'react';
import { Block, Text } from './src/components'
import { WalletState } from './src/contex'


import AppRoot from './src/AppRoot'

export default function App() {
  return (
      <WalletState>
        <AppRoot />
      </WalletState>
  );
}
