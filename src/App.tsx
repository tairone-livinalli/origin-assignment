import * as React from 'react';

import Header from './_common/components/header';
import BuyHouse from './modules/savings/house/buy';
import GlobalStyle from './_common/styles/global';
import SavingProvider from './modules/savings/hooks/useSavingSimulator';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SavingProvider>
        <BuyHouse />
      </SavingProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
