import { css } from "@emotion/react";
import Button from "./common/Button";
import theme from "../styles/theme";

const toggleButton = css`
  width: 8rem;
  height: 4rem;
  border-radius: 4rem;

  position: relative;
`;

const circle = css`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background-color: ${theme.colors.BLUE};

  position: absolute;

  top: 50%;
  left: 5%;
  transform: translateY(-50%);
`;

export default function ToggleButton() {
  return (
    <Button css={toggleButton}>
      <div css={circle} />
    </Button>
  );
}
