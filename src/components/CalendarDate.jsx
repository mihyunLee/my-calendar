import { css } from "@emotion/react";
import theme from "../styles/theme";
import { format } from "date-fns";

const calendarDate = (isCurrentMonth) => css`
  text-align: center;
  padding: 1rem;

  border: 1px solid ${theme.colors.GRAY_100};
  border-radius: 10%;

  color: ${isCurrentMonth ? theme.colors.BLACK : theme.colors.GRAY_100};
`;

export default function CalendarDate({ date, isCurrentMonth }) {
  return (
    <div css={calendarDate(isCurrentMonth)}>
      <span>{format(date, "d")}</span>
    </div>
  );
}
