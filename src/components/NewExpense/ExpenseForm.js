import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // OPTION 1
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // OPTION 2
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  //   const titleChangeHandler = (event) => {
  //     // OPTION 2
  //     setUserInput({ ...userInput, enteredTitle: event.target.value });
  //     // OPTION 3
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput({ ...userInput, enteredAmount: event.target.value });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput({ ...userInput, enteredDate: event.target.value });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log('expenseData', expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2025-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
