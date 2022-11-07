import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "./theme";

const global = css`
  ${emotionReset}

  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    ${theme.mq?.laptop} {
      font-size: 12px;
    }
    ${theme.mq?.tablet} {
      font-size: 9px;
    }
    ${theme.mq?.mobile} {
      font-size: 6px;
    }
  }

  body {
    font-family: GmarketSansMedium, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }

  .App {
    ${theme.flex.column}

    justify-content: space-between;

    height: 100vh;
  }
`;

export default function GlobalStyle() {
  return <Global styles={global} />;
}
