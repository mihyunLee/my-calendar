import { css } from "@emotion/react";
import theme from "../styles/theme";

const calendarTemplate = css`
  ${theme.flex.column}

  text-align: center;

  width: 50%;
  height: 80vh;
`;

export default function CalendarTemplate({ children }) {
  return <div css={calendarTemplate}>{children}</div>;
}
