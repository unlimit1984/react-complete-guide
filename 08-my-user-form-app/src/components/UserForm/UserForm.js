import { useState } from 'react';
import styles from '../../shared-styles/Card.module.css';
import Modal from '../Modal/Modal';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const [invalidMessage, setInvalidMessage] = useState({
    username: "Username can't be empty.",
    age: "Age can't be empty.",
  });

  const submutHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsModalDisplayed(true);
      return;
    }

    const newUser = { id: Math.random().toString(), name: username, age: age };
    props.onAddUser(newUser);
    setUsername('');
    setAge('');
  };

  const userNameHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setInvalidMessage((prevState) => {
        return {
          ...prevState,
          username: "Username can't be empty.",
        };
      });
      return;
    }

    setUsername(event.target.value);
    setInvalidMessage((prevState) => {
      return {
        ...prevState,
        username: '',
      };
    });
  };

  const ageHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setInvalidMessage((prevState) => {
        return {
          ...prevState,
          age: "Age can't be empty.",
        };
      });
      return;
    }

    if (!isNaN(event.target.value) && event.target.value <= 0) {
      setInvalidMessage((prevState) => {
        return {
          ...prevState,
          age: 'Please enter a valid age (>0)',
        };
      });
      return;
    }

    setAge(event.target.value);
    setInvalidMessage((prevState) => {
      return {
        ...prevState,
        age: '',
      };
    });
  };

  const closeHandler = () => {
    setIsModalDisplayed(false);
  };

  return (
    <form onSubmit={submutHandler}>
      <div className={`${styles['form-control']} ${styles['card']}`}>
        <div>
          <label>Username</label>
          <input type="text" onChange={userNameHandler} value={username} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="text" onChange={ageHandler} value={age} />
        </div>
        <button type="submit">Add User</button>
      </div>
      <Modal
        isDisplayed={isModalDisplayed}
        data={invalidMessage}
        onClose={closeHandler}
      />
    </form>
  );
};

export default UserForm;
