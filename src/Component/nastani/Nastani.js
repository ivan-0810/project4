import React, { useState } from 'react';
import moment from "moment";
import Navbar from '../Navbar/Navbar';
import "./Nastani.scss";



const Nastani = (props) => {
  const [WeekDays] = useState(["Нед","Пон","Вто","Сре","Чет","Пет","Саб"])
  const [Months] = useState(['Јануари','Февруари','Март','Април','Мај','Јуни','Јули','Август','Септември','Октомври','Ноември','Декември']); 
  const [dateContext, setDateContext] = useState(moment());
  const [currentMonth,setCurrentMonth] = useState(moment().month())
  const [currentYear,setCurrentYear] = useState(2020);
  const currentDate = dateContext.format("D");
  console.log(currentDate);
  
  const daysInMonth = () => {    
    return dateContext.daysInMonth();
}

  const firstDayOfMonts = () => {
    let DateContext = dateContext;
    let firstDay= moment(DateContext).startOf("month").format("d");
    return firstDay
  }
 //prazni polinja
  let blanks = [];
  for(let i=0; i<firstDayOfMonts(); i++){
    blanks.push(
    <td key={i+10} className="emty-fields">
    {""}  
    </td>);
  }
  //polinja so denovidenovi
  let days = []
  for(let i=1; i<=daysInMonth(); i++){
    let className = (i == currentDate ? "day current-day": "day")
    days.push(
      <td key={i*20} className={className}>
        {i}
      </td>
    )
  }
  
   let totalSlots = [...blanks,...days];
   let rows =[];
   let cells =[];
    
   totalSlots.forEach((row, i) => {
     if((i%7)!==0){
       cells.push(row)
     }
     else{
       let insertRow = cells.slice()
       rows.push(insertRow);
       cells=[];
       cells.push(row)
     }
     if(i=== totalSlots.length-1){
       let insertRow = cells.slice();
       rows.push(insertRow);
     }
   })

  let trElems = rows.map((d,i) => {
    return <tr  key={i*100} className="days">
      {d}
    </tr>
  })
  //increasing one month 
  const nextMonth = () => {
    let mom = Object.assign({}, dateContext);
    mom = moment(dateContext).add(1,"month");
        setDateContext(mom)
}

const prevMonth = () => {
  let mom = Object.assign({}, dateContext);
  mom = moment(dateContext).subtract(1, "month");
  setDateContext(mom);
}
//increasing Month, year and get month days
  const increaseMonth = e => {
    if(currentMonth===11){
    setCurrentMonth(0);
    setCurrentYear(currentYear+1);
    nextMonth();
    }else {
      setCurrentMonth(currentMonth+1);
      nextMonth();
    }
  }
  //decreasing Month, year and get month days
  const decreaseMonth = () => {
    if(currentMonth===0){
      setCurrentMonth(11);
      setCurrentYear(currentYear-1);
      prevMonth()
    } else{
      setCurrentMonth(currentMonth-1)
      prevMonth()
    }
  }

  return (
    <div className="nastani">
      <Navbar />
   
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td><h1>Календар</h1></td>
              <td className="arrows-wd-y">
                <span className="arrow" onClick={decreaseMonth}><i className="fas fa-arrow-left" ></i></span>
              <span className="wd-y">{Months[currentMonth]}</span>
              <span className="wd-y">{currentYear}</span>
              <span className="arrow" onClick={(e)=>increaseMonth(e)}><i className="fas fa-arrow-right"></i></span></td>
            </tr>
          </thead>
          <tbody>
              <tr>
                {WeekDays.map(day => (
                  <td key={day} className="week-day">{day}</td>
                ))}
              </tr>
               {trElems}
              
          </tbody>
        </table>
    </div>
  );
}

export default Nastani;