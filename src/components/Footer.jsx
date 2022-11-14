import { css } from "@emotion/react";
import theme from "../styles/theme";
import { useTheme } from "../context/themeProvider";

const footer = (mode) => css`
  ${theme.flex.row}

  width: 100%;
  height: 8rem;

  color: ${mode === "light" ? theme.colors.GRAY_100 : theme.colors.GRAY_300};
`;

export default function Footer() {
  const [mode] = useTheme();

  return (
    <div css={footer(mode)}>
      <span>ⓒ 2022. MIHYUNLEE All rights reserved.</span>
    </div>
  );
}
