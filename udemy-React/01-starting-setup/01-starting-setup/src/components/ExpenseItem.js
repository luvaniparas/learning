import './ExpenseItem.css';

function ExpenseItem () {
  return (
    <div className="expense-item">
      <div>Feb 13 2023</div>
      <div className="expense-item__description">
        <h2>Car Expense </h2>
        <div className="expense-item__price">$2000</div>{' '}
      </div>
    </div>
  )
}
export default ExpenseItem
