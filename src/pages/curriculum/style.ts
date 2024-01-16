import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 1000px;

  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


export const ImageLogo = styled.img`
  position: relative;
  margin-bottom: 20px;
`;

export const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

export const RightPanel = styled.div`
  width: 200px;
  background: #b67070;

  overflow: hidden;
`;

export const ContentInfo = styled.div`
  margin-left: 40px;
`;

export const Profissional = styled.h3`
  color: #6a6666;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1em;
`;

export const ContainerDados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  span {
    color: #6a6666;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentEmail = styled.div`
  display: flex;
  gap: 5px;

  &.endereço {
    align-items: center;
    max-width: 400px;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  gap: 50px;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    color: #6a6666;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Linha = styled.div`
  position: relative;
  background: #6a6666;
  width: 95%;
  margin: 0 auto;
  height: 2px;
  margin-top: 2em;
`;

export const Bolinha = styled.div`
  position: absolute;
  background: #6a6666;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  top: -4.5px; /* Metade da altura para centralizar verticalmente */
`;

export const LinhaComBolinhas = styled.div`
  position: relative;
  margin-top: 40px;
`;

export const BolinhaEsquerda = styled.div`
  position: absolute;
  background: #6a6666;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  left: 10px;
  top: 50%; /* Ajuste para centralizar verticalmente em relação à linha */
  transform: translateY(-50%);
`;

export const BolinhaDireita = styled.div`
  position: absolute;
  background: #6a6666;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  right: 10px;
  top: 50%; /* Ajuste para centralizar verticalmente em relação à linha */
  transform: translateY(-50%);
`;
