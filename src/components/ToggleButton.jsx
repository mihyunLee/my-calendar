import { css } from "@emotion/react";
import Button from "./common/Button";
import theme from "../styles/theme";

const toggleButton = (isToggle) => css`
  width: 5rem;
  height: 3rem;
  border-radius: 2.5rem;

  background-color: ${isToggle ? theme.colors.GRAY_500 : theme.colors.GRAY_100};

  position: relative;

  margin: 2rem;
`;

const slider = (isToggle) => css`
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

  ${isToggle &&
  `
    left: calc(100% - 2.5rem);
    background: ${theme.colors.GRAY_500};
    box-shadow: inset -0.2rem -0.1rem 0.3rem -0.1rem ${theme.colors.PURPLE},
      inset -0.7rem -0.5rem 0 0 ${theme.colors.SKYBLUE};
  `}
`;

export default function ToggleButton({ isToggle, onClick }) {
  return (
    <Button
      css={toggleButton(isToggle)}
      onClick={onClick}
      aria-label="주/야간모드 변경"
    >
      <div css={slider(isToggle)} />
    </Button>
  );
}
