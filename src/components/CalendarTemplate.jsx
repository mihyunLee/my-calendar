import { css } from "@emotion/react";
import theme from "../styles/theme";

const calendarTemplate = css`
  ${theme.flex.column}

  text-align: center;

  ${theme.mq?.laptop} {
    width: 40%;
  }
  ${theme.mq?.tablet} {
    width: 70%;
  }
  ${theme.mq?.mobile} {
    width: 90%;
  }

  height: 80vh;
`;

export default function CalendarTemplate({ children }) {
  return <div css={calendarTemplate}>{children}</div>;
}
