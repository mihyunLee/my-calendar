import { css } from "@emotion/react";
import theme from "../styles/theme";

const calendarHeader = css`
  ${theme.flex.column}

  width: 100%;
  height: 10rem;

  font-size: 1.5rem;
  font-weight: bold;
`;

const monthBar = css`
  ${theme.flex.row}

  font-size: 1.3rem;
  font-weight: normal;

  margin-top: 1.8rem;
`;

const navButton = css`
  ${theme.flex.row}

  width: 2.5rem;
  height: 2.5rem;

  margin: 0 2rem;

  border-radius: 50%;

  background-color: ${theme.colors.GRAY_100};

  font-size: 1.5rem;
`;

const calendarGrid = css`
  width: 100%;

  flex: 1;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1%;
`;

const calendarDays = css`
  ${theme.flex.row}

  width: 100%;
  height: 15%;

  background-color: ${theme.colors.GRAY_100};
`;

export { calendarHeader, monthBar, navButton, calendarGrid, calendarDays };
