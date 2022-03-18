const UserItem = (props) => {
  const user = props.item;

  return (
    <li>
      <input readOnly value={`${user.name} (${user.age} years old)`} />
    </li>
  );
};

export default UserItem;
