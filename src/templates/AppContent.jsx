import React, { useState } from "react";
import AppModal from "../components/Schedule/Modal/AppModal";
import Schedule from "../components/Schedule/Schedule";
import { v4 as uuidv4 } from "uuid";

////////////////init() variables////////////////////

var newdata = new Date();
var month = newdata.getMonth();
var year = newdata.getFullYear();
console.log("newdata - " + newdata);

//*************** set calendar ****************** */

const cal = (month, year,oldCal) => {
  let oldcal = oldCal
  let days = [{ id: 0, day: "", event: [{ evt: "", isEvt: false }] }];
  var diaPrimeiro = new Date(year, month, 1).getDay();
  var totalDias = new Date(year, month + 1, 0).getDate();
  var totalDiasAnterior = new Date(year, month, 0).getDate();
  var completarCalendar = totalDiasAnterior + 1 - diaPrimeiro;
  var mes = [];
  var dias = [];
  var after31 = 1;
  var inicio = diaPrimeiro;

  for (var diaMes = 0; diaMes < totalDias; ) {
    var semana = [];
    //add days before begin of the month
    for (let before = 0; before < inicio; before++) {
      semana[before] = completarCalendar++;
    }
    for (
      var diaSemana = inicio;
      diaSemana < 7 && diaMes < totalDias;
      diaSemana++
    ) {
      semana[diaSemana] = diaMes + 1;
      diaMes++;
    }
    mes.push(semana);
    inicio = 0;
  }

  dias = mes.flat(Infinity);

  //add days after end of the month
  for (let after = dias.length; after < 42; after++) {
    dias[after] = after31++;
  }

  for (let day = 0; day < dias.length; day++) {
    days[day] = {
      id: uuidv4(),
      day: dias[day],
      event: ''
    };
  }
  // console.log("function calendario - "+ days);

  return days;
};
const days = cal(month, year,[]);

////////////// - begining of application - ////////
const AppContent = () => {
  //*************  all data ************************* */
  const [data, setdata] = useState(days);
  console.log("data  - "+ data);
  //*************  individual data ************************* */
  // id state
  const [id, setId] = useState(0);
  // day state
  const [day, setDay] = useState("");
  // event state
  const [event, setEvent] = useState();

  // month state
  const [mth, setMth] = useState(month);
  // AppModal state
  const [modalShow, setModalShow] = useState(false);
  

  //****************functionality********************** */
  //handle AppModal
  const handleAppModal = isShow => {
    setModalShow(isShow);
  };
  // handle edit

  const handleEdit = id => {
    let expense = data.find(item => item.id === id);
    let { day,event} = expense;
    setDay(day);
    setEvent(event);   
    setId(id);
    setModalShow(true);
    // console.log("handleEdit event - " + event);
  };
  // handle event
  // const handleEvent = nEvent => {
  //   // let tempdata = data.map(item => {
  //   //   return item.id === id ? { ...item, id, day, event } : item;
  //   // });
  //   // setId(tempdata.id);
  //   setEvent("maykmaykmayk");
  //   // setDay(tempdata.day);
  //   //  setdata(tempdata);

  //   console.log(" event - " + event);
  // };
  //handle day

  // handle event
  const handleEvent = e => {  
    setEvent(e.target.value); 
  };
  // handleSubmit
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    let tempExpenses = data.map(item => {
      return item.id === id ? { ...item, day, event } : item;
    });
    setdata(tempExpenses);
    setModalShow(false);
    
  };

  //************ controle do haederControl ************ */
  //init variables
  let calendar = [];
  const [newMonth, setnewMonth] = useState(month);
  const [newYear, setnewYear] = useState(year);
  //handle next month
  const nextMonth = e => {
    setnewMonth(newMonth + 1);
    if (newMonth >= 12) {
      setnewYear(newYear + 1);
      setnewMonth(0);
    }
    calendar = cal(newMonth, newYear);
    
    setMth(newMonth);
    setdata(calendar);
    console.log("onClick={nextMonth} - " + days);
  };
  //handle previous month
  const previousMonth = e => {
    setnewMonth(newMonth - 1);

    if (newMonth < 0) {
      setnewYear(newYear - 1);
      setnewMonth(11);
    }
    calendar = cal(newMonth, newYear);
    setMth(newMonth);
    setdata(calendar);
    console.log("onClick={previousMonth} - " + days);
  };

  return (
    <div className="app-content">
      {console.log("contentEvent == " + event)}
      <Schedule
        handleSubmit={handleSubmit}
        data={data}
        handleEdit={handleEdit}
        handleEvent={handleEvent}
        event={event}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        mth={mth}
      />
      {modalShow && (
        <AppModal
          handleEvent={handleEvent}
          handleSubmit={handleSubmit}
          modalShow={modalShow}
          handleAppModal={handleAppModal}
        />
      )}
    </div>
  );
};

export default AppContent;
