import UserItem from '../UserItem/UserItem';
import styles from './UserItemList.module.css';

const UserItemList = (props) => {
  const users = props.items;

  return (
    <ul className={styles.item}>
      {users.map((user) => (
        <UserItem key={user.id} item={user}></UserItem>
      ))}
    </ul>
  );
};

export default UserItemList;
