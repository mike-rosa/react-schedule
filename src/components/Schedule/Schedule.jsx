import React from "react";
import Day from "./Day/Day";
import Header from "./Header/Header";
import "./Schedule.css";

const Schedule = ({
  date,
  handleEdit,
  addEvent,
  handleEvent,
  event,
 
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
        {date.map(days => {
          return (
            <div>
              <Day
                days={days}
                key={days.id}
                handleEdit={handleEdit}
                addEvent={addEvent}
                handleEvent={handleEvent}
                event={event}
                
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
