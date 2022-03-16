const UserItem = (props) => {
  const user = props.item;

  return (
    <li>
      <h3>{`${user.name} (${user.age} years old)`}</h3>
    </li>
  );
};

export default UserItem;
