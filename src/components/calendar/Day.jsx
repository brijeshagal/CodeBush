import React from "react";
import "./day.scss";
import dayjs from "dayjs";

const Day = ({ day, rowIdx }) => {
  let now = dayjs();
  let today = now.date();
  let month = now.month();
  return (
    <div className={month === day.get("month")? "dateCell": "dateCell lessOpacity"}>
      <header>        
        <div
          className={
            today === day.get("date") ? "today dateHeader" : "dateHeader"
          }
        >
          {day.get("date")}
        </div>
        <div className="contestList"><ul>
          
          </ul></div>
      </header>
    </div>
  );
};

export default Day;
