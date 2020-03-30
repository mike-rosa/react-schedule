import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { MdQueue } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

const AppMiniMenu = ({handleToggle}) => {
    return (
        <div className="app-mini-menu transclass">
       
          <MdArrowForward className="btn-mini-toggle btn-md-icon "  onClick={handleToggle}  />
        
        <div className="item-menu">
          <MdQueue className="btn-icon"/>
         
        </div>
        <div className="item-menu">
          <MdPeople className="btn-icon" />
         
        </div>
        <div className="item-menu">
          <MdEventAvailable className="btn-icon" />
          
        </div>
        <div className="item-menu">
          <MdContactMail className="btn-icon" />
         
        </div>
      </div>
    )
}

export default AppMiniMenu
