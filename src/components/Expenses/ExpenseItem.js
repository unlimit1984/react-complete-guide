import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // function clickHandler() { }
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  console.log('On Rendering');
  console.log(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* OPTION 1 */}
      {/* <button onClick={() => console.log('Clicked!')}>Change title</button> */}

      {/* OPTION 2 */}
      {/* <button
        onClick={() => {
          console.log('Clicked!');
        }}
      >
        Change title
      </button> */}

      {/* OPTION 3 */}
      {/* <button
        onClick={function () {
          console.log('Clicked!');
        }}
      >
        Change title
      </button> */}

      {/* OPTION 4 */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
