import { ChangeEvent } from "react";
import * as C from "./style";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  options?: string[]; // Adicionando propriedade para as opções no caso de input do tipo "radio" ou "select"
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField = ({ label, value, type, onChange }: InputFieldProps) => (
  <C.InputWrapper>
    <C.Label>{label}</C.Label>
      <C.Input value={value} type={type} onChange={onChange} />
  </C.InputWrapper>
);

export default InputField;
