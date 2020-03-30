import React from "react";
import {MdToday} from 'react-icons/md'

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-logo"><MdToday className="logo-icon"/> <span className="font-my">My</span><span className="font-schedule">Schedule</span></div>
      
    </div>
  );
};

export default AppBar;
