import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const allExpenses = props.item.map((expense) => {
    return expense;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={filtredExpenses}
          allItems={allExpenses}
          items={filteredYear}
        />
        <ExpensesList
          item={filtredExpenses}
          items={filteredYear}
          allItems={allExpenses}
        />
      </div>
    </div>
  );
}
export default Expenses;
