import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  margin-left: 2em;

  &.register {
    margin-top: 10px;
    margin-left: 1.4em;
  }

  &.filter {
    margin-left: 1em;
  }
`;

export const SelectContent = styled.div`
  width: 100%;

  &.register{
    width: 97.6%;
  }

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
    cursor: pointer;
    transition: border-color 0.3s ease;
  }

  select:hover {
    border-color: #555;
  }
  select::-ms-expand {
    display: none;
  }

  select option {
    font-size: 16px;
  }
`;

export const ContentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;
