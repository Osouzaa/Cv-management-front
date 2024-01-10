import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
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

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Aumentei o espaçamento entre os itens */
  justify-content: center; /* Centralizei os itens */

`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
