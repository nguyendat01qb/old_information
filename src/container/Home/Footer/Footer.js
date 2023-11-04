import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="foo-container">
      <div className="foo-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
