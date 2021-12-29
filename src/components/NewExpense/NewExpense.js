import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (entredeExpenseData) => {
    const expenseData = {
      ...entredeExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setIsEditing(false); //after editing we close the form
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* we show button if we dont wont editing */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={
            saveExpenseDataHandler
          } /* valeur de ce props est une function qui sera appeleé a l'interieur du composant ExpenseForm*/
        />
      )}
    </div>
  );
};
export default NewExpense;
