import { css } from "@emotion/react";

const colors = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  GRAY_100: "#D0D3D4",
  GRAY_500: "#383838",
  PINK: "#FF0080",
  ORANGE: "#FF8c00",
  PURPLE: "#8983f7",
  SKYBLUE: "#a3dafb",
};

const flex = {
  row: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  column: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme = {
  colors,
  flex,
};

export default theme;
