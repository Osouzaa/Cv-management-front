import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

export const CardInfo = styled.div`
  margin: 55px 0 15px 28px;
  width: 90%;
  border-bottom: 2px solid #851f2c;
  display: flex;
  justify-content: flex-end;
`;

export const ContentInfo = styled.div`
  margin-left: 40px;
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profissional = styled.h3`
  color: #313131;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContainerDados = styled.div`
  display: flex;
  gap: 31px;
  margin-left: 6px;

  span {
    color: #313131;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ContainerTwo = styled.div`
  display: flex;
  gap: 50px;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    color: #313131;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Linha = styled.div`
  position: relative;
  background: #313131;
  width: 90%;
  height: 2px;
  margin-top: 2em;
  margin-left: 1em;
`;

export const Bolinha = styled.div`
  position: absolute;
  background: #313131;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  top: -4.5px;
`;

export const LinhaComBolinhas = styled.div`
  position: relative;
  margin-top: 40px;
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const BolinhaEsquerda = styled.div`
  position: absolute;
  background: #313131;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const BolinhaDireita = styled.div`
  position: absolute;
  background: #313131;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  right: 68px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Resumo = styled.div`
  margin: 30px 0 0 71px;
  width: 78%;

  p {
    color: #313131;
    text-align: justify;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContainerThree = styled.div`
  margin-left: 54px;
`;

export const SubTitle = styled.h2`
  color: #313131;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 1em 0.8em;
`;
export const Vagas = styled.div`
  width: 100%;
  margin: 10px 19px;
  display: flex;
  justify-content: space-between;
  gap: 2em;

  span {
    color: #313131;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
  }
`;
export const VagasItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: #313131;

  &.item_right {
    margin-right: 8em;
  }
`;

export const ContainerFor = styled.div`
  margin-left: 54px;
`;

export const ContentForTitle = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    width: 0;
  }
  img {
    cursor: pointer;
  }
`;

export const ContainerFive = styled.div`
  margin-left: 54px;
`;

export const ContainerSix = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonTeste = styled.button`
  position: absolute;
  width: 30p;
  height: 30px;
  background-color: red;
  right: 0;
`;

export const ContentFive = styled.div`
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #313131;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.Atividades {
    margin-bottom: 14px;
  }

  &.cargos_empresa {
    margin-left: 2em;
  }

  span {
    &.empresa {
      font-weight: 700;
    }
  }

  h4 {
    font-weight: 700;
  }

  li {
    &.title-info {
      font-weight: 700;
      font-size: 20px;
      list-style-type: square;
    }
  }

  li::marker {
    color: #851f2c;
    font-size: 20px;
  }
`;

export const ContentFor = styled.div`
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
`;

export const Institution = styled.div`
  color: #313131;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  li {
    padding-left: 15px;
    list-style-type: square;
  }

  li::marker {
    color: #851f2c;
    font-size: 20px;
  }
`;

export const Prevision = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #313131;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
  margin-left: 2.8em;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoInstituion = styled.div`
  color: #313131;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    font-weight: 600;
  }
`;

export const ContainerSeven = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContentSix = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style-type: square;
  }

  li::marker {
    color: #851f2c;
    font-size: 20px;
  }

  span {
    text-transform: capitalize;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 14px;
  margin-right: 14px;

  gap: 2em;

  button {
    width: 130px;
    height: 44px;
    border-radius: 10px;
    background: #851f2c;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 1s all;

    &:hover {
      border-radius: 10px;
      border: 0.5px solid #851f2c;
      background: #fff;
      color: #000;
    }
  }

  @media (min-height: 0) and (max-height: 700px) {
    flex-direction: column;
    gap: 0.5em;
    position: absolute;
    right: 0.5em;
  }
`;

export const ContentIdiomas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    color: #313131;
  }
`;
