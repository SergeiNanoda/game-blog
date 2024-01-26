import React from "react";
import "./button.css";

export default function Button({
  buttonStyle = "neutralButton",
  className,
  ...rest
}) {
  return (
    <button className={`${buttonStyle} ${className}`} {...rest}>
      {rest.children}
    </button>
  );
}
