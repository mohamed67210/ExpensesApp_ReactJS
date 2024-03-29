import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // en cliquant sur le bouton la page ne se recharge pas
    if (
      entredTitle.trim().length === 0 ||
      entredAmount.trim().length === 0 ||
      entredDate.trim().length === 0
    ) {
      return setIsValid(false);
    }
    const ExpenseData = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate),
    };
    props.onSaveExpenseData(ExpenseData);
    console.log(ExpenseData);
    setEntredTitle(""); //apres submit on renitialise le titre
    setEntredDate("");
    setEntredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`new-expense__controls ${!isValid ? "invalid" : ""}`}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2021-12-31"
            value={entredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
