import React from "react";

import "./Day.css";

const Day = ({ days, handleEdit }) => {
  const { id, day, event } = days;

  return (
    <>
      <div className="btn-day " onClick={() => handleEdit(id)}>
        <div className="btn-modal ">
          <div className="events">
            <div className="day">
              {day}
             
              {event}
            </div>
            <div className="event">
              {/* {event.map(evt => {
                           
                               
                return <div>{event.lenght>0 && evt.isEvt ? "mayk" : "nara"} </div>;
              })} */}
              {/* <div>{event}</div> */}

              {/* <div>{event.find(item => item.id === id)}</div> */}
            </div>
            {/* {qtd > 0 && <div className="qtd">{qtd}</div>} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Day;
