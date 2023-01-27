import React from 'react';

export const CreatePopupComponent = () => {
  return (
    <div className="popup__wrapper">
      <div className="popup__title">
        <div className="popup__title-text">Add new idea item</div>
        <div className="popup__title-close-btn">x</div>
      </div>
      <div className="popup__input">
        Title*
        <input type="text" placeholder="Title goes here" />
      </div>
      <div className="popup__input-date">
        <div className="popup__input-date-left">
          Date
          <input type="text"  />
        </div>
        <div className="popup__input-date-right">
          Begin time
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

