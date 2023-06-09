import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Gaming News</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="\img\wp11115885-pixel-bedroom-wallpapers.jpg"
        alt="MarioPic"
      />
    </div>
  );
}
