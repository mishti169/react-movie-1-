import React from 'react';
import './Switch.css';

function Switch(props) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={props.onToggle} />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
