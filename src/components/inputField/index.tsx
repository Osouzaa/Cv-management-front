import { ChangeEvent } from "react";
import * as C from "./style";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
}

const InputField = ({ label, value, type, onChange, className, disabled }: InputFieldProps) => (
  <C.InputWrapper className={className}>
    <C.Label>{label}</C.Label>
      <C.Input value={value} type={type} onChange={onChange} disabled={disabled}/>
  </C.InputWrapper>
);

export default InputField;
