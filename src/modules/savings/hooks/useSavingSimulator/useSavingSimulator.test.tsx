import { act, renderHook } from '@testing-library/react-hooks';
import { getMonth, getYear } from 'date-fns';

import { SavingProvider, useSavingSimulator } from './useSavingSimulator';

describe('Auth Context', () => {
  it('should be able to initialize the context with the default values', async () => {
    const {
      result: { current: hook }
    } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { amount, monthlyAmount, goalDate, howManyMonths } = hook;
    const currentDate = new Date();

    expect(amount).toEqual(25000);
    expect(monthlyAmount).toEqual(25000);
    expect(getMonth(goalDate)).toEqual(getMonth(currentDate) + 1);
    expect(getYear(goalDate)).toEqual(getYear(currentDate));
    expect(howManyMonths).toEqual(1);
  });

  it('should be able to add one month', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { addMonthToGoalDate } = result.current;

    act(() => {
      addMonthToGoalDate();
    });

    const { goalDate } = result.current;
    const currentDate = new Date();

    expect(getMonth(goalDate)).toEqual(getMonth(currentDate) + 2);
    expect(getYear(goalDate)).toEqual(getYear(currentDate));
  });

  it('should not be able to sub one month from the default value', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { subMonthToGoalDate } = result.current;

    act(() => {
      subMonthToGoalDate();
    });

    const { goalDate } = result.current;
    const currentDate = new Date();

    expect(getMonth(goalDate)).toEqual(getMonth(currentDate) + 1);
    expect(getYear(goalDate)).toEqual(getYear(currentDate));
  });

  it('should be able to sub one month', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { addMonthToGoalDate } = result.current;

    act(() => {
      addMonthToGoalDate();
    });

    const { subMonthToGoalDate } = result.current;

    act(() => {
      subMonthToGoalDate();
    });

    const { goalDate } = result.current;
    const currentDate = new Date();

    expect(getMonth(goalDate)).toEqual(getMonth(currentDate) + 1);
    expect(getYear(goalDate)).toEqual(getYear(currentDate));
  });

  it('should be able to change the amount', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { changeAmount } = result.current;

    const newAmount = 10000;

    act(() => {
      changeAmount(newAmount);
    });

    const { amount } = result.current;

    expect(amount).toEqual(newAmount);
  });

  it('should be able to change the amount and recalculate the montlhy amount', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { changeAmount } = result.current;

    const newAmount = 10000;

    act(() => {
      changeAmount(newAmount);
    });

    const { amount, monthlyAmount } = result.current;

    expect(amount).toEqual(newAmount);
    expect(monthlyAmount).toEqual(newAmount);
  });

  it('should be able to change the amount, add one month and recalculate the montlhy amount', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    const { changeAmount } = result.current;

    const newAmount = 10000;

    act(() => {
      changeAmount(newAmount);
    });

    const { addMonthToGoalDate } = result.current;

    act(() => {
      addMonthToGoalDate();
    });

    const { amount, monthlyAmount } = result.current;
    const newMonthlyAmount = 5000;

    expect(amount).toEqual(newAmount);
    expect(monthlyAmount).toEqual(newMonthlyAmount);
  });

  it('should be able to add three months and recalculate how many months', async () => {
    const { result } = renderHook(() => useSavingSimulator(), {
      wrapper: SavingProvider
    });

    let { addMonthToGoalDate } = result.current;

    act(() => {
      addMonthToGoalDate();
    });

    addMonthToGoalDate = result.current.addMonthToGoalDate;

    act(() => {
      addMonthToGoalDate();
    });

    addMonthToGoalDate = result.current.addMonthToGoalDate;

    act(() => {
      addMonthToGoalDate();
    });

    const { howManyMonths } = result.current;

    expect(howManyMonths).toEqual(4);
  });
});
