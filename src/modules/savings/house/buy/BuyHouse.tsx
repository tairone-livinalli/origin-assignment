import * as React from 'react';
import { useSavingSimulator } from '../../hooks/useSavingSimulator/useSavingSimulator';

import BuyHouseView from './BuyHouseView';

const BuyHouse: React.FC = () => {
  const {
    amount,
    monthlyAmount,
    goalDate,
    howManyMonths,
    addMonthToGoalDate,
    subMonthToGoalDate,
    changeAmount
  } = useSavingSimulator();

  return (
    <BuyHouseView
      {...{
        amount,
        monthlyAmount,
        goalDate,
        howManyMonths,
        addMonthToGoalDate,
        subMonthToGoalDate,
        changeAmount
      }}
    />
  );
};

export default BuyHouse;
