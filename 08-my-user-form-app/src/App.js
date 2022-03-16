import UserForm from './components/UserForm/UserForm';
import UserItemList from './components/UserItemList/UserItemList';
import { useState } from 'react';

const App = () => {
  const INITIAL_USERS = [
    {
      id: '01',
      name: 'Ann',
      age: 23,
    },
    {
      id: '02',
      name: 'Mateusz',
      age: 45,
    },
  ];

  const [users, setUsers] = useState(INITIAL_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <UserForm></UserForm>
      <UserItemList items={users} onAddUser={addUserHandler} />
    </div>
  );
};

export default App;
