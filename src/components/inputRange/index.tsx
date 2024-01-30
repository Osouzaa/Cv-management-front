import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as C from "./style";
import { Typography } from "@mui/material";

interface RangeSliderProps {
  value: number[];
  onChange: (value: number | number[]) => void;
  label: string;
  max: number;
  title?: string;
  real?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const { max } = props;
  const [value, setValue] = useState<number[]>(props.value);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <C.Container>
      <Box >
        <C.ContentLabel id="range-slider-label">{props.label}</C.ContentLabel>
        <Box sx={{ width: 236, display: "flex", alignItems: "center" }}>
          <Slider
            aria-labelledby="range-slider-label"
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={max}
            sx={{
              color: "#851F2C", 
              '& .MuiSlider-thumb': {
                backgroundColor: "#851F2C" 
              }
            }}
          />
        </Box>
        <Typography
          id="non-linear-slider"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          {props.real} {value[0]} - {props.real} {value[1]} {props.title}
        </Typography>
      </Box>
    </C.Container>
  );
};

export default RangeSlider;
