import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Amount() {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ display: "block", marginBottom: "20px" }}
      >
        <Button>Income: $2000</Button>
        <Button>Expense: $1300</Button>
      </ButtonGroup>
    </>
  );
}
