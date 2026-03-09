import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/expenses"
});

export const getExpenses = () => API.get("/");
export const addExpense = (expense) => API.post("/", expense);
export const deleteExpense = (id) => API.delete(`/${id}`);