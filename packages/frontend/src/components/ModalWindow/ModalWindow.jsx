import React, { Children } from "react";
import "./modalwindow.css";
import { CrossIcon } from "../../icons/Cross";

export default function ModalWindow({ isActive, onClose, children, ...props }) {
  return (
    <div className={isActive ? "overlay active" : "overlay"} onClick={onClose}>
      <div
        className={isActive ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_header">
          <button type="button" className="modalButton" onClick={onClose}>
            <CrossIcon />
          </button>
          {props.header}
        </div>
        <div className="modal_body"> {children}</div>

        <div className="modal_footer">{props.footer}</div>
      </div>
    </div>
  );
}
