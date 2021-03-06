import React, { useState } from 'react';
//OPTION 2 and 3
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
//OPTION 1
// import './CourseInput.css';

// OPTION 4
import styles from './CourseInput.module.css';

// OPTION 2
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

// OPTION 3
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // OPTION 1
    // <form onSubmit={formSubmitHandler}>
    //   <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // OPTION 2
    // <form onSubmit={formSubmitHandler}>
    //   <FormControl className={!isValid && 'invalid'}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // OPTION 3
    // <form onSubmit={formSubmitHandler}>
    //   <FormControl invalid={!isValid}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // OPTION 4
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
