import React, { useState } from "react";
import { addExpense } from "../services/api";

function AddExpense({ refresh }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expense = {
      title,
      amount,
      category
    };

    await addExpense(expense);

    setTitle("");
    setAmount("");
    setCategory("");

    refresh();
  };

  return (
    <div className="form">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddExpense;