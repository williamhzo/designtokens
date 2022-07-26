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
    // gradient generated from https://cssgradient.io/gradient-backgrounds/.
    background: "linear-gradient(to right, #92FE9D, #00C9FF)",
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
