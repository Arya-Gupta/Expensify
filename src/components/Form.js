import React from "react";
import AmountField from "./FormComponents/AmountField";
import RadioBtn from "./FormComponents/RadioBtn";
import TitleField from "./FormComponents/TitleField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Form() {
  return (
    <>
      <Box>
        <RadioBtn />
        <TitleField />
        <AmountField />
        <Button variant="contained" sx={{ marginTop: "30px" }}>
          Add
        </Button>
      </Box>
    </>
  );
}
