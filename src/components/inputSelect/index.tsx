// inputSelect.tsx

import { ChangeEvent } from "react";
import * as C from "./style";

interface InputSelectProps {
  label?: string;
  value?: string;
  options?: string[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect = ({ label, value, options, onChange }: InputSelectProps) => (
  <C.InputWrapper>
    <C.ContentLabel>{label}</C.ContentLabel>
    <C.SelectContent>
      <select
        id={label}
        name={label}
        value={value}
        onChange={(e) =>
          onChange &&
          onChange({
            target: { value: e.target.value },
          } as ChangeEvent<HTMLSelectElement>)
        }
      >
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </C.SelectContent>
  </C.InputWrapper>
);

export default InputSelect;
