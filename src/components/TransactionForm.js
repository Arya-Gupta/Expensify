import React, { useState, useContext } from "react";
import AmountField from "./FormComponents/AmountField";
import RadioBtn from "./FormComponents/RadioBtn";
import TitleField from "./FormComponents/TitleField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { GlobalContext } from "../context/GlobalState";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [radioInput, setRadioInput] = useState("income");

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const amountArr = transactions.map((transaction) => transaction.amount);
  const total = amountArr.reduce(
    (totalAmt, currentAmt) => (totalAmt += currentAmt),
    0
  );

  const submitTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      title: title,
      amount: Math.abs(amount),
      type: radioInput,
    };

    setTitle("");
    setAmount("");
    addTransaction(newTransaction);
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Box>
        <RadioBtn radioInput={radioInput} setRadioInput={setRadioInput} />
        <TitleField title={title} setTitle={setTitle} />
        <AmountField amount={amount} setAmount={setAmount} total={total} />

        <Stack onClick={handleClick}>
          <Button
            onClick={submitTransaction}
            variant="contained"
            sx={{ marginTop: "30px", width: "30%" }}
          >
            Add
          </Button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Transaction added successfully
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </>
  );
}
