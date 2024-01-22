import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "ABC",
      amount: 25,
      category: "Utilities",
    },
    {
      id: 2,
      description: "XYZ",
      amount: 50,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "JKL",
      amount: 75,
      category: "Groceries",
    },
    {
      id: 4,
      description: "GHI",
      amount: 100,
      category: "Groceries",
    },
  ]);
  if (expenses.length === 0) return null;

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
