import React from 'react';
import Popup from 'reactjs-popup';
import classes from './Modal.module.css';

export default function Modal({ isModalVisible }) {
  return (
    <>
      <Popup open={isModalVisible} modal={true} closeOnDocumentClick={false}>
        {(close) => (
          <div className={classes['window-content']}>
            <h3 className={classes['popup-title']}>Внимание!</h3>
            <div className={classes.message}>Желаете сохранить изменения?</div>
            <div className={classes.buttonBlock}>
              <button className={classes.button}>Да</button>
              <button className={classes.button} onClick={close}>
                Нет
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
