import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 10px auto;

  @media (min-width: 600px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  @media (min-width: 1200px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }

  @media (min-width: 1600px) {
    margin-left: 28vw;
    margin-right: 5vw;
  }

  @media (min-width: 2560px) {
    margin: 2vw 28vw;
  }
`;



export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  &.localizacao {
    margin-top: 1em;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr; /* Uma coluna por padrão */
  gap: 6px;
  justify-content: center;
  width: 100%;

  &.situacao {
    grid-template-columns: 1fr 1fr;
  }

  &.disponibilidade {
    grid-template-columns: 1fr 1fr;
  }

  &.localizacao {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AddressFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas para cidade e UF */
  gap: 6px;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.ContentButton {
    margin-top: 1em;
  }
`;
export const SubmitButton = styled.button`
  background-color: #9f3a3e;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #932725;
  }
`;
export const ContentMessage = styled.div`
  p {
    &.Err {
      color: #9f3a3e;
      font-weight: 600;
    }

    &.Sucess {
      color: #008000;
      font-weight: 600;
    }
  }
`;
export const FileInputContainer = styled.div`
  margin: 0 0 20px 34px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 3px;
    color: #333;
  }

  input {
    display: none;
  }

  &.Teste {
    position: absolute;
    bottom: 5.1em;
    right: 29.8%;
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #f9f9f9;
    border-radius: 4px;

    &:hover {
      background-color: #e3e3e3;
    }
  }
`;
