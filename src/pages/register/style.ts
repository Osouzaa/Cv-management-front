import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const ContentM = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  grid-column: span 2;
  &.TitleTwo {
    margin-bottom: 2em;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px; /* Aumentei o espaçamento entre os itens */
  justify-content: center; /* Centralizei os itens */
`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.contentTwo {
    margin-top: 1em;
  }
`;

export const SubmitButton = styled.button`
  background-color: #9f3a3e;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #932725;
  }
`;

export const ContentMessage = styled.div`
  p {
    &.Err {
      color: #9f3a3e;
      font-weight: 600;
    }

    &.Sucess {
      color: #008000;
      font-weight: 600;
    }
  }
`;
