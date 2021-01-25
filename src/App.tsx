import * as React from 'react';

import Header from './_common/components/header';
import BuyHouse from './modules/savings/house/buy';
import GlobalStyle from './_common/styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BuyHouse />
      <GlobalStyle />
    </>
  );
};

export default App;
