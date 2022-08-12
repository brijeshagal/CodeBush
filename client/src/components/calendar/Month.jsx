import React from "react";
import Day from "./Day";
import "./month.scss";
import dayjs from "dayjs";

const Month = ({ month }) => {
  let now = dayjs();
  return (
    <div className="month">
      <div className="monthName">{now.format("MMMM").toUpperCase()}</div>
      <div className="weekHead">
        {month[0].map((day, idx) => (
          <div className="week">
            {day.format("ddd").toUpperCase()}
          </div>
        ))}
      </div>
      {month.map((row, i) => (
        // <React.Fragment key={i}>
        <div className="row">
          {row.map((day, idx) => (
            <div className="week">
              <div className="dayCell">
                <Day day={day} key={idx} rowIdx={i} />
              </div>
            </div>
          ))}
        </div>
        // </React.Fragment>
      ))}
    </div>
  );
};

export default Month;