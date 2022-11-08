import React from "react";
import { useState } from "react";
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
import { days } from "../constants/date.mjs";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const handleClickNextMonth = () => {
    setDate((prev) => addMonths(prev, 1));
  };

  const handleClickPrevMonth = () => {
    setDate((prev) => subMonths(prev, 1));
  };

  return (
    <>
      <div css={calendarHeader}>
        <h1>{getYear(date)}</h1>
        <div css={monthBar}>
          <Button css={navButton} onClick={handleClickPrevMonth}>
            <MdChevronLeft />
          </Button>
          <h2>{getMonth(date) + 1}월</h2>
          <Button css={navButton} onClick={handleClickNextMonth}>
            <MdChevronRight />
          </Button>
        </div>
      </div>
      <div css={calendarGrid}>
        {days.map((day, idx) => (
          <div key={idx} css={calendarDays}>
            {day}
          </div>
        ))}
        <div>date</div>
      </div>
    </>
  );
}
