import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 800px;
  height: 620px;

  background-color: #ffffff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  position: absolute;

  left: 35%;
  right: 35%;
  top: 10%;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ContentTitle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #851f2c;
    color: #fff;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ContentsInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin: 1em 1.4em 0 0;
  background: #851f2c;
  color: #fff;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color:#961f2c;
  }
`;
