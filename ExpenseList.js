import React from "react";
import { deleteExpense } from "../services/api";

function ExpenseList({ expenses, refresh }) {

  const handleDelete = async (id) => {
    await deleteExpense(id);
    refresh();
  };

  return (
    <div>

      <h2>Expenses</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {expenses.map((expense) => (

            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>

              <td>
                <button onClick={() => handleDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ExpenseList;