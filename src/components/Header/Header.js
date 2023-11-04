import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      <div className="screen-sub-heading">
        <span>{props.content}</span>
      </div>
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}
