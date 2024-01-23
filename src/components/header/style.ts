import styled from "styled-components";

export const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 340px;
  height: 100vh;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`;

export const ImageLogo = styled.img`
  margin: 50px 0;
`;

export const Content = styled.div`
  width: 327px;
  height: 55px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding-left: 16px;
  cursor: pointer;

  p {
    color: #000;

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    &.active {
      color: #fff;
    }

    &.sair {
      color: #851f2c;
      font-size: 16px;
      font-weight: 600;
    }
  }

  &.active {
    background: #851f2c;
    color: #fff;

    &:hover {
      background: #851f2c;
      color: #fff;
    }
  }

  &:not(.active):hover {
    background: #eee;
  }
`;

export const SairText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #851f2c;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 16px;
  cursor: pointer;
`;