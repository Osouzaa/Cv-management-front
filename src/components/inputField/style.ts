import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-left: 1.4em;
  width: 100%;

  &.situacao {
    position: absolute;
    left: 30.8em;
    top: -0.35em;

    @media (max-width: 450px) {
      margin-left: 0;
      top: 5em;
      left: 0;
    }
  }
  @media (max-width: 450px) {
    &.pretensao {
      margin-left: 0;
    }
    &.inputObs {
      margin-left: 0;
    }
  }

  &.pretensao_Clt {
    position: absolute;
    bottom: 38%;
    left: 51.4%;
    width: 100%;

    @media (max-width: 450px) {
      position: relative;
      margin-left: 0;
      left: 0;
      width: 50%;
    }
  }
  &.escolaridade {
    margin-left: 0;
  }
`;
export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;

  &.inputObs {
    margin-left: 0.67em;
    width: 93%;
  }
  &.pretensao {
    margin-left: 0.7em;
    width: 93%;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  color: #75757e;
  background-color: #fff;

  &.escolaridade {
    width: 100%;
  }
  &.atividades-profissional {
    height: 69px;
  }

  &:focus {
    border-color: #9f3a3e;
  }

  &.inputUF {
    width: 90%;
    margin-bottom: 4%;
  }
  &.data {
    color: #75757e;
  }

  &.situacao {
    width: 46.7%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  &.InfoCandidate {
    width: 90%;
  }

  &.inputObs {
    margin-left: 0.67em;
    width: 196%;
    height: 50px;
    grid-column: 2 span;

    @media (max-width: 450px) {
      width: 100%;
      margin-left: 0em;
    }
  }

  &.pretensao {
    margin-left: 0.7em;
    width: 93%;

    @media (max-width: 450px) {
      margin-left: 0;
      width: 100%;
    }
  }

  &.pretensao_Clt {
    width: 46.4%;

    @media (max-width: 450px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;

