import React from "react";
import "./footerbar.css";

export default function FooterBar() {
  return (
    <div className="bot">
      <i
        className="botIcon fa-brands fa-facebook"
        style={{ color: "#000000" }}
      ></i>
      <i
        className="botIcon fa-brands fa-discord"
        style={{ color: "#000000" }}
      ></i>
      <i
        className="botIcon fa-brands fa-telegram"
        style={{ color: "#000000" }}
      ></i>
    </div>
  );
}
