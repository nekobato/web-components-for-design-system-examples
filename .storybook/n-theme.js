import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "transparent",
  colorSecondary: "#99d",

  // UI
  appBg: "white",
  appContentBg: "transparent",
  appBorderColor: "#ddd",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#fff",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "N Web Components",
  brandUrl: "https://github.com/nekobato/n-web-components"
});
