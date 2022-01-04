import React from 'react';
import Popup from 'reactjs-popup';
import classes from './Modal.module.css';

export default function Modal({ isModalVisible }) {
  return (
    <div className="popup-overlay">
      <Popup open={isModalVisible} modal={true} closeOnDocumentClick={false}>
        {(close) => (
          <div>
            <h3 className="popup-title">Внимание!</h3>
            <div>Желаете сохранить изменения?</div>
            <div>
              <button>Да</button>
              <button className="button" onClick={close}>
                Нет
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
