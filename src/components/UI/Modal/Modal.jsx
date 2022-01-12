import React from 'react';
import Popup from 'reactjs-popup';
import Button from '../Button/Button.jsx';
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
              <Button classType={'submit'} value={'Да'} />
              <Button classType={'danger'} value={'Нет'} />
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
