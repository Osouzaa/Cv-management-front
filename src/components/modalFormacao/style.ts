import styled from "styled-components";

export const ModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;
export const ContentModal = styled.div`
  margin: 18% auto;
  width: 500px;
  height: 277px;
  border-radius: 10px;
  border: 1px solid #6a6666;
  background: #fff;
  padding: 18px 36px;
`;

export const ContentInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  button {
    width: 110px;
    height: 40px;
    border-radius: 5px;
    background: #851f2c;
    border: none;
    margin-left: 3.5em;
    justify-self: flex-end;

    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ContentLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;

  color: #000;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  input {
    width: 230px;
    height: 28px;
    border-radius: 5px;
    border: 0.5px solid #6a6666;
    background: rgba(242, 242, 242, 0.13);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    margin-bottom: 15px;

    &.content-button {
      width: 138px;
      padding-left: 8px; 
      cursor: pointer; 
      border-radius: 5px; 
      min-height: 32px; 
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
  h1 {
    color: #000;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    background-color: transparent;
    border-radius: 20px;
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      background-color: #b67070;
      color: #000;
    }
  }
`;
