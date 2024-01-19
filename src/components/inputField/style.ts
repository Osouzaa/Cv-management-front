import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-left: 1.4em;
  width: 100%;

  &.situacao {
    position: absolute;
    left: 30.8em;
    top: -0.35em;
  }


  /* &.aaaa {
    grid-column: span 2;
  } */
`;
export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;
  
  &.inputObs {
    margin-left: .67em;
    width:93%;
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
  }

  &.InfoCandidate {
    width: 87%;
  }

  &.inputObs {
    margin-left: .67em;
    width:93%;
  }
`;
