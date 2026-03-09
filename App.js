import React, { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import { getExpenses } from "./services/api";
import "./App.css";

function App() {

  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (

    <div className="container">

      <h1>Expense Manager</h1>

      <AddExpense refresh={loadExpenses} />

      <ExpenseList expenses={expenses} refresh={loadExpenses} />

    </div>

  );
}

export default App;