import { css } from "@emotion/react";
import theme from "../styles/theme";
import { format } from "date-fns";

const calendarDateTemplate = (isCurrentMonth, isToday) => css`
  padding: 0.3rem;

  border: 1px solid ${theme.colors.GRAY_100};
  border-radius: 10%;

  color: ${isCurrentMonth ? theme.colors.BLACK : theme.colors.GRAY_100};

  cursor: pointer;

  &:hover {
    span {
      background-color: ${!isToday && isCurrentMonth && theme.colors.GRAY_100};
    }
  }
`;

const calendarDate = (isToday) => css`
  display: block;

  ${theme.flex.row}

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  background-color: ${isToday && theme.colors.ORANGE};
  color: ${isToday && theme.colors.WHITE};
`;

export default function CalendarDate({ date, isCurrentMonth, isToday }) {
  return (
    <div css={calendarDateTemplate(isCurrentMonth, isToday)}>
      <span css={calendarDate(isToday)}>{format(date, "d")}</span>
    </div>
  );
}
