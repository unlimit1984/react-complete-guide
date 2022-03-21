import UserItem from '../UserItem/UserItem';


const UserItemList = (props) => {
  const users = props.items;

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} item={user}></UserItem>
      ))}
    </div>
  );
};

export default UserItemList;
