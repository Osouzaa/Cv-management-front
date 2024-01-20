import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin: 5px 0px;
  color: #333;
  width: 100%;
`;

export const SelectContent = styled.div`
  width: 100%;

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box; 
    font-size: 14px; 
    color: #333; 
    background-color: #fff; 
    cursor: pointer; /* Muda o cursor ao passar sobre o select */
    transition: border-color 0.3s ease; /* Adiciona uma transição suave na cor da borda */
  }

  select:hover {
    border-color: #555; /* Altera a cor da borda ao passar o mouse sobre o select */
  }

  /* Estilize a seta padrão do select (apenas para navegadores que não suportam 'appearance') */
  select::-ms-expand {
    display: none;
  }

  select option {
    font-size: 16px; /* Tamanho da fonte para as opções do select */
  }
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
    margin-left: 0.5em;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;
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
