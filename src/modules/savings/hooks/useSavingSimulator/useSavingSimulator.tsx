import * as React from 'react';
import {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext
} from 'react';
import {
  addMonths,
  differenceInCalendarMonths,
  subMonths,
  isEqual,
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
  setDate
} from 'date-fns';

interface SavingContextData {
  amount: number;
  monthlyAmount: number;
  goalDate: Date;
  howManyMonths: number;
  changeAmount(newAmount: number): void;
  addMonthToGoalDate(): void;
  subMonthToGoalDate(): void;
}

const SavingContext = createContext<SavingContextData>({} as SavingContextData);

const SavingProvider: React.FC = ({ children }) => {
  const currentMonth = new Date();
  const [goalDate, setGoalDate] = useState(addMonths(currentMonth, 1));
  const [howManyMonths, setHowManyMonths] = useState(
    differenceInCalendarMonths(goalDate, currentMonth)
  );
  const [amount, setAmount] = useState(25000);
  const [monthlyAmount, setMonthlyAmount] = useState(
    () => amount / howManyMonths
  );

  const changeAmount = useCallback(
    newAmount => {
      setAmount(newAmount);
    },
    [setAmount]
  );

  const addMonthToGoalDate = useCallback(() => {
    const newGoalDate = addMonths(goalDate, 1);

    setGoalDate(newGoalDate);
  }, [goalDate, setGoalDate]);

  const prepareDateToComparison = useCallback(date => {
    return setDate(
      setHours(setMinutes(setSeconds(setMilliseconds(date, 0), 0), 0), 0),
      1
    );
  }, []);

  const subMonthToGoalDate = useCallback(() => {
    const newGoalDate = subMonths(goalDate, 1);

    const formattedNewGoalDate = prepareDateToComparison(newGoalDate);
    const formattedCurrentDate = prepareDateToComparison(currentMonth);

    if (isEqual(formattedCurrentDate, formattedNewGoalDate)) {
      return;
    }

    setGoalDate(newGoalDate);
  }, [goalDate, currentMonth, setGoalDate, prepareDateToComparison]);

  const calculateMonthlyAmount = useCallback(() => {
    const newMonthlyAmount = amount / howManyMonths;

    setMonthlyAmount(newMonthlyAmount);
  }, [amount, howManyMonths, setMonthlyAmount]);

  const calculateHowManyMonths = useCallback(() => {
    const dateDiff = differenceInCalendarMonths(goalDate, currentMonth);

    setHowManyMonths(dateDiff);
  }, [goalDate, currentMonth, setHowManyMonths]);

  useEffect(() => {
    calculateHowManyMonths();
  }, [goalDate, calculateHowManyMonths]);

  useEffect(() => {
    calculateMonthlyAmount();
  }, [amount, howManyMonths, calculateMonthlyAmount]);

  return (
    <SavingContext.Provider
      value={{
        amount,
        monthlyAmount,
        goalDate,
        howManyMonths,
        changeAmount,
        addMonthToGoalDate,
        subMonthToGoalDate
      }}
    >
      {children}
    </SavingContext.Provider>
  );
};

function useSavingSimulator(): SavingContextData {
  const context = useContext(SavingContext);

  return context;
}

export { SavingProvider, useSavingSimulator };
