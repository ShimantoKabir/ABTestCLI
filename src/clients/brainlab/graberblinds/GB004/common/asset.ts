import { ButtonModel } from "../models/button.model";

export const selectors = {
  formConfirmation: "div.Form__Confirmation",
};

export const headlineText: string =
  "Your inquiry has been submitted. Thank you! While you wait for a Graber Expert to follow up, why not order some free swatches or try our state-of-the-art visualizer technology?";

export const buttons: ButtonModel[] = [
  {
    href: "https://www.graberblinds.com/free-swatches/",
    text: "GET FREE SWATCHES",
  },
  {
    href: "https://www.graberblinds.com/visualization/",
    text: "VISUALIZE YOUR SPACE",
  },
];
