import { css } from "@emotion/react";
import theme from "../styles/theme";

const calendarDateTemplate = (isCurrentMonth, isToday, mode) => css`
  padding: 0.3rem;

  border: 1px solid ${theme.colors.GRAY_100};
  border-radius: 10%;

  color: ${!isCurrentMonth && theme.colors.GRAY_300};

  cursor: pointer;

  &:hover {
    span {
      background-color: ${!isToday &&
      isCurrentMonth &&
      (mode === "light" ? theme.colors.GRAY_100 : theme.colors.GRAY_300)};
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

export { calendarDateTemplate, calendarDate };
