import React from "react";
import { useSelector } from "react-redux";
import ModalWindow from "./../ModalWindow/ModalWindow";
import "./aboutmodal.css";

export default function AboutModal({ onClose, ...props }) {
  const isActive = useSelector((state) => state.modal.isActiveAbout);
  console.log("state", isActive);

  return (
    <div>
      <ModalWindow
        isActive={isActive}
        onClose={onClose}
        header={<h1>About us</h1>}
      >
        <div className="aboutContainer">
          <img
            className="imageAboutModal"
            src="\img\Dance_girl.gif"
            alt="DanceGirl"
          ></img>
          <p className="contentAboutModal">
            Welcome to our gaming blog! We're a passionate group of gamers who
            eat, sleep, and breathe everything related to computer games. With a
            shared love for immersive worlds, epic battles, and challenging
            quests, we've come together to create a space where fellow gamers
            can find the latest news, insightful reviews, and helpful tips to
            enhance their gaming experience. Our mission is simple: to share our
            knowledge and enthusiasm for computer games with the gaming
            community. Whether you're a casual player, a competitive e-sports
            enthusiast, or somewhere in between, our blog is designed to cater
            to all types of gamers.
          </p>
        </div>
      </ModalWindow>
    </div>
  );
}
