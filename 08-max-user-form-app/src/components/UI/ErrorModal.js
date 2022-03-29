import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div></div>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

// const ErrorModal = (props) => {
//   return (
//     <React.Fragment>
//       <div className={classes.backdrop} onClick={props.onConfirm} />
//       <Card className={classes.modal}>
//         <div></div>
//         <header className={classes.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//           <Button onClick={props.onConfirm}>Okay</Button>
//         </footer>
//       </Card>
//     </React.Fragment>
//   );
// };

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
