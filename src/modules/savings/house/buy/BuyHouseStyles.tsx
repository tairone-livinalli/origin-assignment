import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Greetings = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 24px 0;

  p {
    font-size: 18px;
    font-weight: 400;
    color: #1b31a8;

    strong {
      font-weight: 600;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
  max-width: 560px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;

  img {
    width: 64px;
  }
`;

export const Title = styled.div`
  margin-left: 8px;

  h1 {
    font-family: 'Rubik';
    font-weight: 500px;
    font-size: 20px;
  }

  p {
    color: #708797;
    font-weight: 400px;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 560px;
`;

export const Form = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const TotalAmount = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

export const MoneyInput = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 12px;
  height: 56px;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #4d6475;
    margin-left: 2px;

    font-family: 'Rubik';
    font-size: 20px;

    &::placeholder {
      color: #4d6475;
    }
  }

  svg {
    width: 24px;
  }
`;

export const Goal = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

export const DateInput = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 13px 12px;
  height: 56px;
  width: 100%;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;

  img:last-child {
    transform: rotate(180deg);
  }
`;

export const Date = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Feedback = styled.div`
  height: 155px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 16px;
`;

export const Amount = styled.div`
  height: 75px;
  padding: 24px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 400px;
    font-size: 18px;
  }

  strong {
    color: #0079ff;
    font-family: 'Rubik';
    font-weight: 500px;
    font-size: 24px;
  }
`;

export const Message = styled.div`
  padding: 24px 32px;
  height: 80px;
  background: #f4f8fa;
  border-radius: 0 8px;

  p {
    min-width: 248px;
    text-align: center;
    font-weight: 400px;
    font-size: 12px;

    strong {
      font-weight: 500px;
      font-size: 12px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 100%;

  button {
    width: 320px;
    height: 56px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: #fff;
    background: #1b31a8;
    border-radius: 32px;
    border: none;

    font-weight: 600;
    font-size: 16px;
  }
`;
