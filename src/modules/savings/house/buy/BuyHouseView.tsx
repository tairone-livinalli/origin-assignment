import * as React from 'react';

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

const BuyHouseView: React.FC = () => {
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
                <input type="number" defaultValue={25000} />
              </MoneyInput>
            </TotalAmount>
            <Goal>
              <p>Reach goal by</p>
              <DateInput>
                <img src={arrowIcon} alt="Arrow aiming left" />
                <Date>
                  <h1>October</h1>
                  <p>2021</p>
                </Date>
                <img src={arrowIcon} alt="Arrow aiming right" />
              </DateInput>
            </Goal>
          </Form>
          <Feedback>
            <Amount>
              <p>Monthly amount</p>
              <strong>$521</strong>
            </Amount>
            <Message>
              <p>
                You’re planning <strong>48 monthly deposits</strong> to reach
                your <strong>$25,000</strong> goal by{' '}
                <strong>October 2020</strong>.
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
