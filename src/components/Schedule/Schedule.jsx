import React from "react";
import Day from "./Day/Day";
import Header from "./Header/Header";
import "./Schedule.css";

const Schedule = ({
  data,
  handleEdit,  
  handleEvent,  
  handleSubmit,
  previousMonth,
  nextMonth,
  mth
}) => {
  return (
    <div className="card">      
      <div>
        {" "}
        <Header
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          mth={mth}
        />
      </div>
      <div className="schedule">
        {" "}
        {data.map(days => {
                 
          return (
            
              <Day
                key={days.id}              
                days={days}
                handleEdit={handleEdit}                
                handleEvent={handleEvent}
                handleSubmit={handleSubmit}
              />
            
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
