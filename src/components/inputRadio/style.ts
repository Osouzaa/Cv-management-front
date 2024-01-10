import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  width: 100%;
`;

export const Input = styled.label`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; // Ajuste a largura desejada entre as opções

  label {
    margin-left: .5em;
  }
`;

export const ContentInput = styled.div`
 display: flex;
 align-items: center;

`

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-weight: 400;

  option {
    font-weight: 400;
  }
`;
