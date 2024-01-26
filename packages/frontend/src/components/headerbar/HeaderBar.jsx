import React from "react";
import "./headerbar.css";
import { useNavigate } from "react-router-dom";
import { modalAboutToggled } from "../../features/modalSlice";
import { useDispatch } from "react-redux";
import AboutModal from "../AboutModal/AboutModal";
import AuthButton from "../AuthButton/AuthButton";

export default function HeaderBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i
            onClick={() => navigate("/")}
            className="homeIcon fa-brands fa-fort-awesome"
            style={{ color: "#000000" }}
          ></i>
        </div>
        <div className="topCenter">
          <ul className="headList">
            <li className="headListItem write">WRITE</li>
            <li
              className="headListItem about"
              onClick={() => dispatch(modalAboutToggled(true))}
            >
              ABOUT
            </li>
            <li className="headListItem contact">CONTACT</li>
          </ul>
        </div>
        <div className="topRight">
          <AuthButton></AuthButton>
          <img
            onClick={() => navigate("/login")}
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
      <AboutModal onClose={() => dispatch(modalAboutToggled(false))} />
    </>
  );
}
