import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="button">
      {props.text}
    </button>
  );
};

export default Button;
