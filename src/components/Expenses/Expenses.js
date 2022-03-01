import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
