import styles from './UserForm.module.css';

const UserForm = () => {
  const submutHandler = (event) => {
    event.preventDefault();
    console.log('submitting form');
  };

  const userNameHandler = (event) => {
    console.log(event.target.value);
  };

  const ageHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={submutHandler}>
      <div className={styles['form-control']}>
        <div>
          <label>Username</label>
          <input type="text" onChange={userNameHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="text" onChange={ageHandler} />
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
