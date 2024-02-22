import React, { useState } from "react";
import '../task/popup.css';

function Popup() {
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const handleClickOpen = () => {
    setPopup(true);
  };

  const handleClose = () => {
    setPopup(false);
  };

  const handleChange = (e) => {
    setPopupText(e.target.value);
  };

  return (
    <div className="main">
      <div className="popup-container">
        <button onClick={handleClickOpen}>Click For Popup</button>
      </div>
      {popup && (
        <div className="total">
          <div className="mainbox">
            <div className="inputtext">
              <label htmlFor="popupInput">Enter Text</label>
              <input type="text" id="popupInput" onChange={handleChange} />
              <button onClick={handleClose}>Submit</button>
            </div>
            <hr />
          </div>
          <div className="showmsginbox">
            <div className="popclg">
              <h1>Pop-Up</h1>
              <h1 className="xforclose" onClick={handleClose}>X</h1>
            </div>
            <p>{popupText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
