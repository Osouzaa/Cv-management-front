import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  border-radius: 10px;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 502px;
  height: 250px;
  text-align: center;
  padding: 20px 0;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 16px;
`;

export const SubmitButton = styled.button`
  width: 92px;
  height: 38px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  border: none;
  margin-top: 44px;
  cursor: pointer;

  &:hover {
    background-color: #932725;
    color: #FFFFFF;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: #d20404;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h3 {
    color: #000;

    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h4 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
