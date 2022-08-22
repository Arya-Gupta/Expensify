import React, { useContext } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { GlobalContext } from "../context/GlobalState";

export default function Amount() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const calc = (transactions) => {
    let negativeArr = [],
      positiveArr = [];
    for (let i = 0; i < transactions.length; i++) {
      let amt = transactions[i].amount;
      let type = transactions[i].type;
      if (type == "income") positiveArr.push(amt);
      else negativeArr.push(amt);
    }
    income = positiveArr.reduce(
      (totalAmt, currentAmt) => (totalAmt += currentAmt),
      0
    );
    expense = negativeArr.reduce(
      (totalAmt, currentAmt) => (totalAmt += currentAmt),
      0
    );
  };

  let income = 0,
    expense = 0;
  calc(transactions);

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ marginBottom: "20px" }}
      >
        <Button>Income: ${income}</Button>
        <Button>Expense: ${Math.abs(expense)}</Button>
      </ButtonGroup>
    </>
  );
}
