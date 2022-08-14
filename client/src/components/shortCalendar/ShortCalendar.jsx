import React from "react";
import dayjs from "dayjs";
import "./shortCalendar.scss";
import weekday from "dayjs/plugin/weekday.js";
import Day from "../calendar/Day";
dayjs.extend(weekday);

function ShortCalendar({ month }) {
  let now = dayjs();
  let today = now.date();
  // console.log(now.weekday(-1));
  // console.log(now.weekday(-1).format("ddd DD MMM"));
  // const allDays = [];
  return (
    <div className="shortCalendar">
      <div className="past">

          <Day day={now.weekday(-1)} key = {(now.weekday(-1).format("DD")%5)} />
 
      </div>
      <div className="today">

          <Day day={now.weekday(0)} key = {(now.weekday(0).format("DD")%5)}/>
      
      </div>
      <div className="next">
     
          <Day day={now.weekday(1)} key = {(now.weekday(1).format("DD")%5)}/>
     
      </div>
      <div className="next">
    
          <Day day={now.weekday(2)} key = {(now.weekday(2).format("DD")%5)}/>
  
      </div>
      <div className="next">
   
          <Day day={now.weekday(3)} key = {(now.weekday(3).format("DD")%5)}/>
  
      </div>
    </div>
  );
}
export default ShortCalendar;
