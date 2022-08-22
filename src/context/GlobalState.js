import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Here we have our initial state which is a single object - however all we need is our transactions
const initialState = {
  transactions: [
    // { id: 1, title: "Flower", amount: 20, type: "expense" },
    // { id: 2, title: "Salary", amount: 300, type: "income" },
    // { id: 3, title: "Book", amount: 10, type: "expense" },
    // { id: 4, title: "Errands", amount: 150, type: "income" }
  ],
};

// Create context - export GlobalContext so that it can be accessed in other files, and pass to it the initial state
export const GlobalContext = createContext(initialState);

// Provider component to wrap around other components which need access to our global state
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions - makes calls to reducer
  const deleteTransaction = (id) => {
    dispatch({
      type: "DEL",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
