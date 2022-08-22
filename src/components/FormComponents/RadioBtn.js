import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function ControlledRadioButtonsGroup(props) {

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.radioInput}
        onChange={(e) => props.setRadioInput(e.target.value)}
      >
        <FormControlLabel value="income" control={<Radio />} label="Income" />
        <FormControlLabel value="expense" control={<Radio />} label="Expense" />
      </RadioGroup>
    </FormControl>
  );
}
