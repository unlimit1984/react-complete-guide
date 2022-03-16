import UserItem from '../UserItem/UserItem';

const UserItemList = (props) => {
  const users = props.items;

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} item={user}></UserItem>
      ))}
    </ul>
  );
};

export default UserItemList;
