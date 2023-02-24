export default (state, action) => {
  switch (action.type) {
    case "DEL":
      let delTransactions = [];
      for (let i = 0; i < state.transactions.length; i++) {
        let transaction = state.transactions[i];
        if (transaction.id !== action.payload) {
          delTransactions.push(transaction);
        }
      }

      return {
        ...state,
        transactions: delTransactions,
      };

    case "ADD":
      let addTransactions = [];
      for (let i = 0; i < state.transactions.length; i++) {
        let transaction = state.transactions[i];
        addTransactions.push(transaction);
      }
      addTransactions.push(action.payload);

      return {
        ...state,
        transactions: addTransactions,
      };

    default:
      return state;
  }
};
