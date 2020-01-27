import { configure, addParameters, addDecorator } from "@storybook/html";
import myTheme from "./n-theme";

addParameters({
  options: {
    showPanel: false,
    isToolshown: true,
    theme: myTheme
  }
});

addDecorator(storyFn => {
  return `<div class="story-container">${storyFn()}</div>`;
});

configure(require.context("../src/stories", true, /\.stories\.ts$/), module);
