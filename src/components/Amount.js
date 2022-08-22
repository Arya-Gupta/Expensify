import React, { useContext } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GlobalContext } from "../context/GlobalState";

export default function Amount() {
  const { transactions } = useContext(GlobalContext);

  const amountArr = transactions.map((transaction) => {
    return transaction.type == "income"
      ? transaction.amount
      : transaction.amount * -1;
  });

  const total = amountArr
    .reduce((totalAmt, currentAmt) => (totalAmt += currentAmt), 0)
    .toFixed();

  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <AttachMoneyIcon
          sx={{
            color: "#8B9556",
            fontSize: "40px",
            float: "left"
          }}
        />
        <Typography variant="h5" sx={{ paddingTop: "5px" }}>
          {total}
        </Typography>
      </Box>
    </>
  );
}
