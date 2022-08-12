import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import CalendarHeader from '../../components/calendar/CalendaHeader';
import Month from '../../components/calendar/Month'
import Sidebar from '../../components/calendar/Sidebar';
import { getMonth } from "./util";
import './calendar.scss';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
        <div className='calendar'>
          <CalendarHeader />
          <Sidebar />
          <Month month={currentMonth} />          
        </div>
  );
}

export default Calendar;
