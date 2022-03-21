import styles from './Modal.module.css';

const Modal = (props) => {
  const isDisplayed = props.isDisplayed;

  if (!isDisplayed) {
    return <div></div>;
  }

  const data = props.data;
  console.log('props.data', props.data);

  const closeHandler = () => {
    props.onClose();
  };

  return (
    <div className={styles.modal}>
      <p>Invalid input</p>
      {data.username && data.username.length > 0 && <p>{data.username}</p>}
      {data.age && data.age.length > 0 && <p>{data.age}</p>}
      <button type="button" onClick={closeHandler}>
        Okay
      </button>
    </div>
  );
};

export default Modal;
