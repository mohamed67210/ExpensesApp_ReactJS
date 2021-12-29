import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  //les expenses de base en statique
  {
    id: 1,
    title: "Assurance automobile",
    amount: 10,
    date: new Date(2021, 0, 1),
  },
  {
    id: 2,
    title: "Abonnement Netflix",
    amount: 10,
    date: new Date(2021, 1, 3),
  },
  {
    id: 3,
    title: "Abonnement Apple Music",
    amount: 9.99,
    date: new Date(2020, 2, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
