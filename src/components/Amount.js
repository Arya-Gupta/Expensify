import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Amount() {
  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <AttachMoneyIcon
          sx={{
            color: "#8B9556",
            fontSize: "40px",
            float: "left",
          }}
        />
        <Typography variant="h5" sx={{ paddingTop: "5px" }}>
          700
        </Typography>
      </Box>
    </>
  );
}
