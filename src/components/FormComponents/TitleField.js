import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TitleField(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Title"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
        variant="standard"
        sx={{
          "& .MuiInputBase-root": {
            color: props.theme.text,
          },
          "& .MuiFormLabel-root": {
            color: props.theme.text,
          },
        }}
      />
    </Box>
  );
}
