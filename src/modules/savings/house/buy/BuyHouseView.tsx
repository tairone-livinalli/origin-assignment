import * as React from 'react';
import NumberFormat from 'react-number-format';
import { format } from 'date-fns';

import houseIcon from '../../../../assets/icons/house.svg';
import dollarIcon from '../../../../assets/icons/dollar.svg';
import arrowIcon from '../../../../assets/icons/arrow.svg';

import {
  Page,
  Greetings,
  Container,
  Header,
  Title,
  Content,
  Form,
  TotalAmount,
  MoneyInput,
  Goal,
  DateInput,
  Date,
  Feedback,
  Amount,
  Message,
  Footer
} from './BuyHouseStyles';

interface BuyHouseViewProps {
  amount: number;
  monthlyAmount: number;
  goalDate: Date;
  howManyMonths: number;
  changeAmount(newAmount: number): void;
  addMonthToGoalDate(): void;
  subMonthToGoalDate(): void;
}

const BuyHouseView: React.FC<BuyHouseViewProps> = ({
  amount,
  monthlyAmount,
  goalDate,
  howManyMonths,
  addMonthToGoalDate,
  subMonthToGoalDate,
  changeAmount
}) => {
  return (
    <Page>
      <Greetings>
        <p>
          Let&apos;s plan your <strong>saving goal</strong>
        </p>
      </Greetings>

      <Container>
        <Header>
          <img src={houseIcon} alt="House" />
          <Title>
            <h1>Buy a house</h1>
            <p>Saving goal</p>
          </Title>
        </Header>
        <Content>
          <Form>
            <TotalAmount>
              <p>Total amount</p>
              <MoneyInput>
                <img src={dollarIcon} alt="Dollar sign" />
                <NumberFormat
                  thousandSeparator=","
                  allowNegative={false}
                  value={amount}
                  decimalScale={0}
                  onValueChange={({ floatValue }) => changeAmount(floatValue)}
                />
              </MoneyInput>
            </TotalAmount>
            <Goal>
              <p>Reach goal by</p>
              <DateInput>
                <img
                  src={arrowIcon}
                  alt="Arrow aiming left"
                  onClick={subMonthToGoalDate}
                />
                <Date>
                  <h1>{format(goalDate, 'MMMM')}</h1>
                  <p>{format(goalDate, 'yyyy')}</p>
                </Date>
                <img
                  src={arrowIcon}
                  alt="Arrow aiming right"
                  onClick={addMonthToGoalDate}
                />
              </DateInput>
            </Goal>
          </Form>
          <Feedback>
            <Amount>
              <p>Monthly amount</p>
              <strong>
                <NumberFormat
                  prefix="$"
                  thousandSeparator=","
                  displayType="text"
                  decimalScale={0}
                  value={monthlyAmount}
                />
              </strong>
            </Amount>
            <Message>
              <p>
                You’re planning{' '}
                <strong>{howManyMonths} monthly deposits</strong> to reach your{' '}
                <strong>
                  <NumberFormat
                    prefix="$"
                    thousandSeparator=","
                    displayType="text"
                    decimalScale={0}
                    value={amount}
                  />
                </strong>{' '}
                goal by <strong>{format(goalDate, 'MMMM yyyy')}</strong>.
              </p>
            </Message>
          </Feedback>
        </Content>
        <Footer>
          <button>Confirm</button>
        </Footer>
      </Container>
    </Page>
  );
};

export default BuyHouseView;
