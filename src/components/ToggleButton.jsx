import { css } from "@emotion/react";
import Button from "./common/Button";
import theme from "../styles/theme";
import { useTheme } from "../context/themeProvider";

const toggleButton = (mode) => css`
  width: 5rem;
  height: 3rem;
  border-radius: 2.5rem;

  background-color: ${mode === "light"
    ? theme.colors.GRAY_100
    : theme.colors.GRAY_500};

  position: relative;

  margin: 2rem;
`;

const slider = (mode) => css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: linear-gradient(
    40deg,
    ${theme.colors.PINK},
    ${theme.colors.ORANGE} 70%
  );

  position: absolute;

  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  transition: 0.5s;

  ${mode === "dark" &&
  `
    left: calc(100% - 2.5rem);
    background: ${theme.colors.GRAY_500};
    box-shadow: inset -0.2rem -0.1rem 0.3rem -0.1rem ${theme.colors.PURPLE},
      inset -0.7rem -0.5rem 0 0 ${theme.colors.SKYBLUE};
  `}
`;

export default function ToggleButton() {
  const [mode, toggleTheme] = useTheme();

  return (
    <Button
      css={toggleButton(mode)}
      onClick={toggleTheme}
      aria-label="주/야간모드 변경"
    >
      <div css={slider(mode)} />
    </Button>
  );
}
