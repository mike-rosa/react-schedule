import React from "react";
import { MdArrowBack } from "react-icons/md";
import { MdQueue } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

const appAsideMenu = ({handleToggle}) => {
  return (
    <div className="app-aside-menu transclass">
      
        <MdArrowBack className="btn-toggle btn-md-icon "  onClick={handleToggle}  />
     
      <div className="item-menu">
        <MdQueue className="btn-icon" />
        Register
      </div>
      <div className="item-menu">
        <MdPeople className="btn-icon" />
        Employee
      </div>
      <div className="item-menu">
        <MdEventAvailable className="btn-icon" />
        Schedule
      </div>
      <div className="item-menu">
        <MdContactMail className="btn-icon" />
        Perfil
      </div>
    </div>
  );
};

export default appAsideMenu;
