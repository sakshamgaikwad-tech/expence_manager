package com.controller;
import org.springframework.web.bind.annotation.*;

import com.model.Expense;
import com.service.ExpenseService;

import java.util.List;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin
public class ExpenseController {
    private final ExpenseService expenseService;

    /**
     * @param expenseService
     */
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.addExpense(expense);
    }
      @GetMapping
    public List<Expense> getExpenses() {
        return expenseService.getAllExpenses();
    }
  @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
        return "Expense deleted successfully";
    }
}
