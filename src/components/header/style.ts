import styled from "styled-components";

export const Content = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  margin: 0 1em;

  img {
    cursor: pointer;
  }
`;

export const Linhaa = styled.div`
  border-bottom: 1px solid #cc1616;
  box-shadow: 2px 5px 10px 0px #000;
  width: 1200px;
  margin-bottom: 20px;
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 30px;

  button {
    width: 224px;
    height: 38px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  button.red {
    color: #cc1616; // Vermelho
  }

  button.black {
    color: #000000; // Preto
  }
`;
