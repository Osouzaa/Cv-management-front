import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: space-around;
  margin: 30px;
`;

export const Content = styled.div`
  position: relative;
  width: 300px;
  height: 246px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra */
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  padding: 1em;
  text-align: center;
  font-weight: 500;
  color: #9b3f39;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 15px;

  span {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }
`;

export const InfoCandidate = styled.div`
  color: #5A5A5A;

  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Button = styled.button`
  width: 103px;
  height: 32px;
  border-radius: 20px;
  background: #b67070;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: #ffffff;
  position: absolute;
  bottom: 1em;
  right: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Adicionando transição suave na mudança de cor */

  &:hover {
    background-color: #6b2323; /* Nova cor de fundo ao passar o mouse */
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  margin: 0 0.5em;
  padding: 0.5em;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#3498db" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#3498db")};
  border: 1px solid #3498db;
  border-radius: 5px;
`;
