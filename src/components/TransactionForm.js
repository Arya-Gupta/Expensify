import React, { useState, useContext } from "react";
import AmountField from "./FormComponents/AmountField";
import RadioBtn from "./FormComponents/RadioBtn";
import TitleField from "./FormComponents/TitleField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const amountArr = transactions.map((transaction) => transaction.amount);
  const total = amountArr.reduce(
    (totalAmt, currentAmt) => (totalAmt += currentAmt),
    0
  );

  let id = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    id++;

    const newTransaction = {
      id: id,
      title: title,
      amount: parseInt(amount, 10),
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <Box>
        <RadioBtn />
        <TitleField title={title} setTitle={setTitle} />
        <AmountField amount={amount} setAmount={setAmount} total={total} />
        <Button onClick={onSubmit} variant="contained" sx={{ marginTop: "30px" }}>
          Add
        </Button>
      </Box>
    </>
  );
}
