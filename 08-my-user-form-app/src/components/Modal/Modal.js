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
    <div>
      <div className={styles['modal-background']} onClick={closeHandler}>
        <p>Text</p>
        <div className={styles.inner}></div>
        <p>Text</p>
      </div>

      <div className={styles['modal-content']}>
        <div className={styles.header}>Invalid input</div>
        <div className={styles.content}>
          {data.username && data.username.length > 0 && <p>{data.username}</p>}
          {data.age && data.age.length > 0 && <p>{data.age}</p>}
          <button type="button" onClick={closeHandler}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
