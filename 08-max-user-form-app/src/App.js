import React, { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    // OPTION 1
    // <div>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </div>

    // OPTION 2
    // <Wrapper>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </Wrapper>

    // OPTION 3
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </React.Fragment>
    // OPTION 4 -> alternative to <React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
