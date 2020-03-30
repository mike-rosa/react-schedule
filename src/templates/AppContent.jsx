import React, { useState } from "react";
import Schedule from "../components/Schedule/Schedule";
import { v4 as uuidv4 } from "uuid";

////////////////init() variables////////////////////

var newDate = new Date();
var month = newDate.getMonth();
var year = newDate.getFullYear();
console.log("newDate - " + newDate);

//*************** set calendar ****************** */

const cal = (month, year) => {
  let days = [];
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
    days[day] = { id: uuidv4(), day: dias[day], event: "" };
  }

  return days;
};
const days = cal(month, year);

////////////// - begining of application - ////////
const AppContent = () => {
  //*************  all Date ************************* */
  const [date, setDate] = useState(days);
  //*************  individual Date ************************* */
  // id state
  const [id, setId] = useState(0);
  // day state
  const [day, setDay] = useState("");
  // event state
  const [event, setEvent] = useState("");
  // month state
  const [mth, setMth] = useState(month);
  // const [addEvent, setAddEvent] = useState(false);

  //****************functionality********************** */
  // handle edit
  const handleEdit = id => {
    let nDay = date.find(item => item.id === id);
    let { day, event } = nDay;
    setId(id);
    setDay(day);
    setEvent(event);
    console.log("verificar date - ");
  };
  // handle event
  // const handleEvent = nEvent => {
  //   // let tempDate = date.map(item => {
  //   //   return item.id === id ? { ...item, id, day, event } : item;
  //   // });
  //   // setId(tempDate.id);
  //   setEvent("maykmaykmayk");
  //   // setDay(tempDate.day);
  //   //  setDate(tempDate);

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
    if (event !== "") {
      // if (edit) {
      //   let tempExpenses = expenses.map(item => {
      //     return item.id === id ? { ...item, charge, amount } : item;
      //   });
      //   setExpenses(tempExpenses);
      //   setEdit(false);
      // } else {
        const singleEvent = { id: uuidv4(), day, event };
        setDate([...date, singleEvent]);
        // handleAlert({ type: "success", text: "item added" });
      // }
      // set charge back to empty string
      // setCharge("");
      // // set amount back to zero
      // setAmount("");
    } else {
      // handleAlert({
      //   type: "danger",
      //   text: `charge can't be empty value and amount value has to be bigger than zero`
      // });
    }
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
    setDate(calendar);
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
    setDate(calendar);
    console.log("onClick={previousMonth} - " + days);
  };

  return (
    <div className="app-content">
      {console.log("contentEvent == " + event)}
      <Schedule
        date={date}
        handleEdit={handleEdit}
        handleEvent={handleEvent}
        event={event}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        mth={mth}
      />
    </div>
  );
};

export default AppContent;
