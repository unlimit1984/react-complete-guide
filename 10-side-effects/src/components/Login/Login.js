import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//OPTION 3 with reducer
// Can be created outside of the scope of the component function, because it doesn't need to interact with anything defined inside of the component function.
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  useEffect(() => {
    console.log('RUNNING');
  }, []);

  //OPTION 2 with useEffect
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log('Checking form validity! Inside useEffect');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(timeout);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    //OPTION 1
    // setEnteredEmail(event.target.value);

    //OPTION with reducer
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    //OPTION 1 and with reducer
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    //OPTION 1
    // setFormIsValid(
    // enteredEmail.includes('@') && event.target.value.trim().length > 6
    // );

    //OPTION 3
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    //OPTION 1,2
    // setEmailIsValid(enteredEmail.includes('@'));

    //OPTION
    // setEmailIsValid(emailState.isValid);

    //OPTION with reducer
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //OPTION 1,2
    // props.onLogin(enteredEmail, enteredPassword);

    //OPTION 3
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !emailState.isValid  ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );

  //OPTION 1,2
  // return (
  //   <Card className={classes.login}>
  //     <form onSubmit={submitHandler}>
  //       <div
  //         className={`${classes.control} ${
  //           emailIsValid === false ? classes.invalid : ''
  //         }`}
  //       >
  //         <label htmlFor="email">E-Mail</label>
  //         <input
  //           type="email"
  //           id="email"
  //           value={enteredEmail}
  //           onChange={emailChangeHandler}
  //           onBlur={validateEmailHandler}
  //         />
  //       </div>
  //       <div
  //         className={`${classes.control} ${
  //           passwordIsValid === false ? classes.invalid : ''
  //         }`}
  //       >
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           id="password"
  //           value={enteredPassword}
  //           onChange={passwordChangeHandler}
  //           onBlur={validatePasswordHandler}
  //         />
  //       </div>
  //       <div className={classes.actions}>
  //         <Button type="submit" className={classes.btn} disabled={!formIsValid}>
  //           Login
  //         </Button>
  //       </div>
  //     </form>
  //   </Card>
  // );
};

export default Login;
