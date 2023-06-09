import React from "react";
import "./headerbar.css";

export default function HeaderBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i
          className="homeIcon fa-brands fa-fort-awesome"
          style={{ color: "#000000" }}
        ></i>
      </div>
      <div className="topCenter">
        <ul className="headList">
          <li className="headListItem write">WRITE</li>
          <li className="headListItem about">ABOUT</li>
          <li className="headListItem contact">CONTACT</li>
          <li className="headListItem login">LOGIN</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="headImg"
          src="\img\Pixel-Mario-Computer-Wallpaper.jpg"
          alt=""
        ></img>
        <i
          className="search fa-solid fa-magnifying-glass"
          style={{ color: "#000000" }}
        ></i>
      </div>
    </div>
  );
}
