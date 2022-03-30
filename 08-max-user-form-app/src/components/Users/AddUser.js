import { useRef, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: 'Invalid input',
    //     message: 'Please enter a valid name and age (non-empty values).',
    //   });
    //   return;
    // }
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    // if (+enteredAge < 1) {
    //   setError({
    //     title: 'Invalid age',
    //     message: 'Please enter a valid age (> 0).',
    //   });
    //   return;
    // }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value =''
    ageInputRef.current.value =''
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    //  <div>
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            ref={nameInputRef}
          /> */}
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          {/* <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef}
          /> */}
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {/* </div> */}
    </Wrapper>
  );
};

export default AddUser;
