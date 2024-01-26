import React from "react";
import "./textInput.css";

export default function TextInput(props) {
  console.log({
    props,
  });
  return (
    <>
      <label>{props.label}</label>
      <input
        {...props.register}
        className="inputArea"
        type={props.type}
        placeholder={props.placeholder}
      ></input>
      <div className="errorMessage">
        {props.errors?.[props.register.name] && (
          <p>{props.errors?.[props.register.name]?.message || "Error!"}</p>
        )}
      </div>
    </>
  );
}
