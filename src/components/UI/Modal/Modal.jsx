import React from 'react';
import Popup from 'reactjs-popup';
import Button from '../Button/Button.jsx';
import classes from './Modal.module.css';

//this component will be further developed in the future
export default function Modal({ isModalVisible, onSubmit, onClose }) {
  const closeHandler = (close) => {
    return () => {
      close();
      onClose();
    };
  };

  const submitHandler = () => {
    close();
    return onSubmit();
  };

  return (
    <>
      <Popup open={isModalVisible} modal={true} closeOnDocumentClick={false}>
        {(close) => (
          <div className={classes['window-content']}>
            <h3 className={classes['popup-title']}>Внимание!</h3>
            <div className={classes.message}>Желаете сохранить изменения?</div>
            <div className={classes.buttonBlock}>
              <Button classType={'submit'} value={'Да'} action={submitHandler} />
              <Button classType={'danger'} value={'Нет'} action={closeHandler(close)} />
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
