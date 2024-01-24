import styled from "styled-components";
import IconLupa from "../../image/icon_lupa_black.svg";

export const ContainerSearch = styled.div`
  width: 1198px;
  height: 111px;
  border-radius: 10px 10px 0 0;
  background: #fff;

  @media (min-width: 600px) {
    margin-top: 2%;
    margin-left: 10%;
  }

  @media (min-width: 1200px) {
    width: 1198px;
    margin-top: -2%;
    margin-left: 21%;
  }

  @media (min-width: 2560px) {
    width: 1930px;
    margin-top: -5%;
    margin-left: 10%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentInput = styled.input`
  width: 876px;
  height: 44px;

  border-radius: 10px;
  background: #f2f2f2 url(${IconLupa}) no-repeat 10px center;
  background-size: 24px;
  box-shadow: 0px 4px 10px 0px rgba(133, 31, 44, 0.09);
  border: none;
  padding-left: 57px;

  &::placeholder {
    color: #6a6666;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentImage = styled.img`
  width: 78px;
  height: 44px;
  border-radius: 10px;
  background: #851f2c;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;