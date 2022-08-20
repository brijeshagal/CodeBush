import React, { useContext } from 'react';
import Month from './Month';
import GlobalContext from "../../pages/calendar/context/GlobalContext"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dayjs from 'dayjs';
import "./calendarHeader.scss"

const CalendaHeader = () => {
  let now = dayjs();
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  return (
    <div className="monthName">
        <button className="left" onClick={handlePrevMonth}>
          <span>
            <ChevronLeftIcon viewBox="0 0 100 100" />
          </span>
        </button>
        <div className="centerMonthName">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </div>
        <button className="right" onClick={handleNextMonth}>
          <span>
            <ChevronRightIcon viewBox="0 0 100 100" />
          </span>
        </button>
      </div>
  );
}

export default CalendaHeader;
