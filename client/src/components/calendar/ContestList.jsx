import React from "react";
import "./contestList.scss";
// import dayjs from "dayjs";
import "../../global.scss";
const ContestList = ({
  contest,
  id,
  time,
  rated,
  registered,
  day,
  dateVal,
}) => {
  let name = id;
  console.log(name === 1);
  return (
    <span className={id === 1 ? "codechefbg" : ((id === 2) ? "codeforcesbg" : "default")}>
      <li className={dateVal === day.format() ? "contestList" : "inactive"}>
        <span className="data">{time}</span>
        <span className="data"> {contest} </span>
      </li>
    </span>
  );
};
export default ContestList;
