import { createStitches } from "@stitches/react";

import { slate, slateDark, sky, skyDark } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...sky,
      ...slate,
      ...skyDark,
      ...slateDark,
    },
    fonts: {
      inter: "Inter, -apple-system, system-ui, sans-serif",
      mono: "monospace", // TODO
    },
  },
  media: {},
  utils: {
    p: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: "left" | "center" | "right") => ({ textAlign: value }),

    fd: (value: "row" | "column") => ({ flexDirection: value }),
    fw: (value: string) => ({ flexWrap: value }),

    ai: (value: "flex-start" | "center" | "flex-end") => ({
      alignItems: value,
    }),
    ac: (value: "flex-start" | "center" | "flex-end") => ({
      alignContent: value,
    }),
    jc: (value: "flex-start" | "center" | "flex-end") => ({
      justifyContent: value,
    }),
  },
});
