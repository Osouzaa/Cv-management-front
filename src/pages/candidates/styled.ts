import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 74.4vw;
  height: 88vh;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 5%;
  margin-left: 5%;
  justify-content: center;

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 4%;
    margin-left: 23.4%;
  }

  @media (min-width: 2560px) {
    margin-top: 3%;
    margin-left: 20.2%;
  }
`;

export const ContainerList = styled.div`
  position: absolute;
  right: 5vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  margin-left: 2em;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  &.list {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  @media (min-width: 2560px) {
    right: 2vw;
  }
`;

export const ContainerExcel = styled.div`
  position: absolute;
  right: 19vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 2560px) {
    right: 12vw;
  }
`;

export const ContainerBloco = styled.div`
  position: absolute;
  right: 12vw;
  top: -3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;

  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  width: 80px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }

  &.bloco {
    border: 2px solid #6b2323;
    border-bottom: none;
  }

  @media (min-width: 2560px) {
    right: 7vw;
  }
`;
