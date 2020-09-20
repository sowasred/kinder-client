import React from "react";
import "./Header.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MessageIcon from "@material-ui/icons/Message";
import Kinderlogo from "./kinderlogo.jpg";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src={Kinderlogo} className="header__logo" alt="kinder logo" />

      <IconButton>
        <MessageIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
