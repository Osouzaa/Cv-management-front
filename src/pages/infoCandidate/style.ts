import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  margin: 20px auto;

  border-radius: 8px;
  background: #f2f2f2;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 3%;
    margin-left: 26%;
  }

  @media (min-width: 2560px) {
    margin-top: 2%;
    margin-left: 25%;
  }
`;

export const ContentTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  button {
    cursor: pointer;
    border: none;
    margin-right: 2em;

    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: #9f3a3e;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    color: #fff;
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: background 0.3s ease;

    &:hover {
      background-color: #932725;
    }

    &.CV {
      width: 150px;
      position: absolute;
      left: 1em;
    }
  }
`;
export const Title = styled.h2`
  position: relative;
  left: 12em;
  color: #9b3f39;

  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.InfoCandidate {
    left: 14.7em;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //gap: 8px; /* Espaçamento entre os campos, ajuste conforme necessário */
  align-items: center;
`;

export const ContainerGeneral = styled.div`
  margin-top: 1em;
`;
