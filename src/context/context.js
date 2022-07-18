import React, { createContext, useReducer } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  [
    {
      amount: 500,
      category: "Food",
      type: "Expense",
      date: "2022-07-18",
      id: "d4833265-3a18-4c93-8663-5c415a1df5af",
    },
    {
      amount: 1000,
      category: "Travel",
      type: "Expense",
      date: "2022-07-18",
      id: "9c4b9b31-01cf-4f67-9530-dafcde30e6b7",
    },
    {
      amount: 2500,
      category: "Lottery",
      type: "Income",
      date: "2022-07-12",
      id: "4c5861d1-2d6e-4047-8b6c-c6613d026ea9",
    },
    {
      amount: 7000,
      category: "Investments",
      type: "Income",
      date: "2022-07-18",
      id: "6cc87d72-a5d4-4845-b3b2-b2ac0fa582c8",
    },
  ],
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
