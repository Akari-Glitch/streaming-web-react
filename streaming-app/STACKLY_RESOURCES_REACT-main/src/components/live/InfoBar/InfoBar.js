import React from "react";

import onlineIcon from "../../../assets/onlineIcon.png";

import "./InfoBar.css";

export const InfoBar = ({ workshop, users }) => (
  <div className="infoBar">
    <div className="title__container">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{workshop}</h3>
      <p>{users.length}</p>
    </div>
  </div>
);
