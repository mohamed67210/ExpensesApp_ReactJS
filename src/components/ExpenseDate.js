import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("fr-FR", { month: "long" });
  const day = props.date.toLocaleString("fr-FR", { day: "2-digit" });
  const year = props.date.toLocaleString("fr-FR", { year: "numeric" });
  return (
    <div className="expense_date">
      <div className="expense_date__day">{day}</div>
      <div className="expense_date__month">{month}</div>
      <div className="expense_date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
