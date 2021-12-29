//import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log("ExpenseItem evaluated by react");
  //const [amount, setAmount] = useState(props.amount);
  //en cliquant sur le bouton 'chager title' on fait :

  return (
    <li>
    <div className="expense_item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense_item__description">
        <div className="expense_item__price">
          <h2>{props.amount}$</h2>
        </div>
      </div>
    </div>
    </li>
  );
};

export default ExpenseItem;
