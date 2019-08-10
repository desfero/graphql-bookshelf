import { injectGlobal } from "styled-components";

import { cardType } from "../components/CardGroup/Card";

const base = {
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  fontColor: "#747474",
  bgColor: "#F8F8F8",
  mainColor: "#F5C34C",
  failureColor: "#f54f2e",
  containerWidth: "700px",
};

const theme = {
  ...base,
  card: {
    [cardType.default]: {
      background: "#FFF",
      headingColor: base.mainColor,
      paragraphColor: "#BABABA",
      baseSize: "13px",
    },
    [cardType.lite]: {
      background: "#FFF",
      baseSize: "12px",
    },
  },
  loader: {
    indicator: base.mainColor,
    background: "#EAEAEA",
  },
};

// Global styles
injectGlobal`
  body {
    background: ${theme.bgColor};
    color: ${theme.fontColor};
    font-family: ${theme.fontFamily};
  }
`;

export { theme };
