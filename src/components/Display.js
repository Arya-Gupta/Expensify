import React, { useContext } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { GlobalContext } from "../context/GlobalState";

export default function Amount() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const calculateIncome = (amounts) => {
    let positiveAmounts = [];
    for (let i = 0; i < amounts.length; i++) {
      let amt = amounts[i];
      if (amt > 0) positiveAmounts.push(amt);
    }
    return positiveAmounts.reduce(
      (totalAmt, currentAmt) => (totalAmt += currentAmt)
    );
  };

  const calculateExpense = (amounts) => {
    let negativeAmounts = [];
    for (let i = 0; i < amounts.length; i++) {
      let amt = amounts[i];
      if (amt < 0) negativeAmounts.push(amt);
    }
    return negativeAmounts.reduce(
      (totalAmt, currentAmt) => (totalAmt += currentAmt)
    );
  };

  const income = calculateIncome(amounts);
  const expense = calculateExpense(amounts);

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ display: "block", marginBottom: "20px" }}
      >
        <Button>Income: ${income}</Button>
        <Button>Expense: ${expense}</Button>
      </ButtonGroup>
    </>
  );
}
 