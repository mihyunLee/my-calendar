import React from "react";
import Button from "./common/Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  calendarHeader,
  monthBar,
  navButton,
  calendarGrid,
} from "./Calendar.styles";

export default function Calendar() {
  return (
    <>
      <div css={calendarHeader}>
        <h1>2022</h1>
        <div css={monthBar}>
          <Button css={navButton}>
            <MdChevronLeft />
          </Button>
          <h2>11월</h2>
          <Button css={navButton}>
            <MdChevronRight />
          </Button>
        </div>
      </div>
      <div css={calendarGrid}></div>
    </>
  );
}
