import React from "react";
import "./authbutton.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthButton() {
  const [authorized, setAuthorized] = useState("");
  const navigate = useNavigate();
  const logout = () => {
    setAuthorized("");
    localStorage.clear();
  };
  useEffect(() => {
    setAuthorized(localStorage.getItem("TOKEN"));
  }, [localStorage.getItem("TOKEN")]);
  return (
    <div>
      {authorized ? (
        <span className="headerAuth" onClick={logout}>
          LOGOUT
        </span>
      ) : (
        <span className="headerAuth" onClick={() => navigate("/login")}>
          LOGIN
        </span>
      )}
    </div>
  );
}
