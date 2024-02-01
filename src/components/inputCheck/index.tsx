import React from "react";
import * as C from './style'

interface Option {
  label: string;
  value: string;
}

interface ContentCheckLabelProps {
  title: string;
  options: Option[];
  onChange?: (value: any) => void; 
}

const ContentCheckLabel: React.FC<ContentCheckLabelProps> = ({
  title,
  options,
  onChange, 
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value); 
    }
  };

  return (
    <C.ContentCheckLabel>
      <h3>{title}</h3>
      {options.map((option, index) => (
        <C.ContentInputsOptions key={index} className="content-inputs-options">
          {/* Adicionando o evento onChange ao input */}
          <input 
            type="checkbox" 
            name={option.value} 
            value={option.value} 
            onChange={handleChange} // Chamando a função handleChange quando houver uma mudança no input
          />
          <span>{option.label}</span>
        </C.ContentInputsOptions>
      ))}
    </C.ContentCheckLabel>
  );
};

export { ContentCheckLabel };
