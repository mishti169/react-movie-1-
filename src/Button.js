import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button
      onClick={props.onBtnClick}
      className={`btn btn-${props.variant}`}
      disabled={props.btnDisable}
    >
      {props.text}
    </button>
  );
}

export default Button;
