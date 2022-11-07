import { css } from "@emotion/react";

const button = css`
  border: none;

  text-align: center;

  cursor: pointer;

  &:hover {
    filter: brightness(1.02);
  }
`;

export default function Button({
  type = "button",
  cssProp,
  onClick,
  children,
  ...props
}) {
  return (
    <button type={type} css={[button, cssProp]} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
