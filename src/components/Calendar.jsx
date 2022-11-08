import React from "react";
import { useState, useEffect } from "react";
import Button from "./common/Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  calendarHeader,
  monthBar,
  navButton,
  calendarGrid,
  calendarDays,
} from "./Calendar.styles";
import { addMonths, getMonth, getYear, subMonths } from "date-fns";
import { days } from "../constants/date.js";
import { getCalendarDays } from "../utils/date";
import CalendarDate from "./CalendarDate";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(
    getCalendarDays(currentDate)
  );

  const handleClickNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handleClickPrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  useEffect(() => {
    setCalendarDate(getCalendarDays(currentDate));
  }, [currentDate]);

  return (
    <>
      <div css={calendarHeader}>
        <h1>{getYear(currentDate)}</h1>
        <div css={monthBar}>
          <Button css={navButton} onClick={handleClickPrevMonth}>
            <MdChevronLeft />
          </Button>
          <h2>{getMonth(currentDate) + 1}월</h2>
          <Button css={navButton} onClick={handleClickNextMonth}>
            <MdChevronRight />
          </Button>
        </div>
      </div>
      <div css={calendarDays}>
        {days.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </div>
      <div css={calendarGrid}>
        {calendarDate.map((date) => (
          <CalendarDate
            key={date}
            date={date}
            isCurrentMonth={date.getMonth() === currentDate.getMonth()}
          />
        ))}
      </div>
    </>
  );
}
