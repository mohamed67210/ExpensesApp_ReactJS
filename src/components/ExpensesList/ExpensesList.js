import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";

const ExpensesList = (props) => {
  //   let filterContent = <p>No expense found</p>; //initialiser le contenue de filtercontent

  //condition
  if (props.items === "All") {
    //return <h2 className="expenses-list__fallback">Yes !</h2>;
    return (
        <ul className="expenses-list">
          {props.allItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      );

  }
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses !</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
