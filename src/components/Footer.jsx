import { css } from "@emotion/react";
import theme from "../styles/theme";

const footer = css`
  ${theme.flex.row}

  width: 100%;
  height: 8rem;

  color: ${theme.colors.GRAY_500};
`;

export default function Footer() {
  return (
    <div css={footer}>
      <span>ⓒ 2022. MIHYUNLEE All rights reserved.</span>
    </div>
  );
}
