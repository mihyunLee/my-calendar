import { css } from "@emotion/react";
import theme from "../../styles/theme";

const button = css`
  border: none;

  text-align: center;

  cursor: pointer;

  background-color: ${theme.colors.GRAY_100};
  color: ${theme.colors.BLACK};

  &:hover {
    filter: brightness(1.05);
  }
`;

export default function Button({
  type = "button",
  css,
  onClick,
  children,
  ...props
}) {
  return (
    <button type={type} css={[button, css]} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
