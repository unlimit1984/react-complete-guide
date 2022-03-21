import styles from '../../shared-styles/Card.module.css';

const UserItem = (props) => {
  const user = props.item;

  return (
    // <li>
    <div className={styles.card}>
      <input readOnly value={`${user.name} (${user.age} years old)`} />
      {/* </li> */}
    </div>
  );
};

export default UserItem;
