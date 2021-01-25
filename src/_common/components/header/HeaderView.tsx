import * as React from 'react';

import { Header } from './HeaderStyles';

import originLogo from '../../../assets/images/logo.svg';

const HeaderView: React.FC = () => {
  return (
    <Header>
      <img src={originLogo} alt="Origin logo" />
    </Header>
  );
};

export default HeaderView;
