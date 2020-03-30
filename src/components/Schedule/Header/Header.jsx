import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import "./Header.css";
var months=['January','February','March','April','May','June','July','August','Setember','October','November','December'];
const Schedule = ({ previousMonth,nextMonth,mth}) => {
  return (
    <div>
      <div className="header-mes-control">
  <MdKeyboardArrowLeft className="btn-header-icon" onClick={()=>previousMonth()}/> <div className="header-mes">{months[mth]}</div>
        <MdKeyboardArrowRight className="btn-header-icon"onClick={()=>nextMonth()} />
      </div>
      <div className="header">
        <div className="header-day">SUN</div>
        <div className="header-day">MON</div>
        <div className="header-day">TUE</div>
        <div className="header-day">WED</div>
        <div className="header-day">THU</div>
        <div className="header-day">FRI</div>
        <div className="header-day">SAT</div>
      </div>
    </div>
  );
};

export default Schedule;
