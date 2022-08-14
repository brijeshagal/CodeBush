import React from "react";
import "./day.scss";
import dayjs from "dayjs";
import ContestList from "./ContestList";
// import {useEffect} from "react";

const Day = ({ day, rowIdx }) => {
  let now = dayjs();
  let today = now.date();
  let month = now.month();
  const list = [
    {
      id: 1,
      contest: "Codechef Cook-Off Rated for Div 3 & 4",
      time: "20:00-23:00",
      dateVal: "2022-08-13T00:00:00+05:30",
      rated: true,
      registered: false,
    },
    {
      id: 2,
      platform: "codeforces",
      contest: "Codeforces Div 2 800 Educational Round",
      time: "20:00-23:00",
      dateVal: "2022-08-14T00:00:00+05:30",
      rated: true,
      registered: false,
    },
  ];
  return (
    <div
      className={
        month === day.get("month") ? "dateCell" : "dateCell lessOpacity"
      }
    >
      <div
        className={
          today === day.get("date") ? "today dateHeader" : "dateHeader"
        }
      >
        {day.get("date")}
      </div>
      <div className="list">
        <ul className="contestsul">
          {list.map((item) => (
            <ContestList
              contest={item.contest}
              rated={item.rated}
              registered={item.registered}
              time={item.time}
              id={item.id}
              dateVal={item.dateVal}
              day={day}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day;
