import { ChangeEvent } from "react";
import * as C from "./style";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  options?: string[]; // Adicionando propriedade para as opções no caso de input do tipo "radio" ou "select"
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField = ({ label, value, type, options, onChange }: InputFieldProps) => (
  <C.InputWrapper>
    <C.Label>{label}</C.Label>
    {type === "radio" ? (
      <C.Content>
        {options && options.map((option, index) => (
          <C.ContentLabel key={index}>
            <input
              type="radio"
              id={`radio-${index}`}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            <label htmlFor={`radio-${index}`}>{option}</label>
          </C.ContentLabel>
        ))}
      </C.Content>
    ) : type === "select" ? (
      <C.Select value={value} onChange={onChange as (e: ChangeEvent<HTMLSelectElement>) => void}>
        {options && options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </C.Select>
    ) : (
      <C.Input value={value} type={type} onChange={onChange} />
    )}
  </C.InputWrapper>
);

export default InputField;
