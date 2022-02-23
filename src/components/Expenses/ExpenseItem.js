import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {
  //   console.log('Clicked!');
  // }

  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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
