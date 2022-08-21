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

export default function FolderList(props) {
  const { transactions } = useContext(GlobalContext);
  
  const expense = {
    color: props.colorSubtract,
    icon: <RemoveOutlinedIcon />
  };
  
  const income = {
    color: props.colorAdd,
    icon: <AddIcon />
  };

  const generateStyle = (transactionType) => {
    return (transactionType == "expense") ? expense : income;
  };

  return (
    <List sx={{ width: "70%", margin: "auto" }}>
      {transactions.map((transaction) => (
        <>
          <ListItem
            sx={{ backgroundColor: generateStyle(transaction.type).color }}
          >
            <ListItemAvatar>
              <Avatar>{generateStyle(transaction.type).icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={"$" + Math.abs(transaction.amount)}
              secondary={transaction.text}
            />
          </ListItem>
        </>
      ))}
    </List>
  );
}
