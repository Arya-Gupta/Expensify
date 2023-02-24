import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function AmountField(props) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel
            htmlFor="standard-adornment-amount"
            sx={{ color: "white" }}
          >
            Amount
          </InputLabel>
          <Input
            sx={{ color: props.theme.text }}
            id="standard-adornment-amount"
            type="number"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
            startAdornment={
              <InputAdornment
                position="start"
                sx={{
                  "& .MuiTypography-root": {
                    color: props.theme.text,
                  },
                }}
              >
                $
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Box>
  );
}
