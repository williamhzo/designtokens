import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "*": {
    margin: 0,
  },

  "html, body": {
    height: "100%",
  },

  body: {
    lineHeight: 1.5,
    webkitFontSmoothing: "antialiased",
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$inter",
    // background: "linear-gradient(270deg, #ecebff 0%, #e0fbff 100%)",
    backgroundColor: "$accentBase",
    color: "$accentText",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "#root, #__next": {
    isolation: "isolate",
  },
});
