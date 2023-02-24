import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function HistoryContents(props) {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const expense = {
    color: props.colorSubtract,
    icon: <RemoveOutlinedIcon />,
  };

  const income = {
    color: props.colorAdd,
    icon: <AddIcon />,
  };

  const generateStyle = (transactionType) => {
    return transactionType == "expense" ? expense : income;
  };

  return (
    <List sx={{ width: "70%", margin: "auto" }}>
      {transactions.map((transaction, index) => (
        <ListItem
          sx={{ backgroundColor: generateStyle(transaction.type).color }}
          key={index}
        >
          <ListItemAvatar>
            <Avatar sx={{ color: props.mode.symbol }}>
              {generateStyle(transaction.type).icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "white" }}
            primary={"$" + Math.abs(transaction.amount)}
            secondary={transaction.title}
          />

          <Tooltip
            sx={{ color: props.mode.symbol }}
            title="Delete"
            onClick={() => deleteTransaction(transaction.id)}
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}
