export const selectors = {
  carousal: "div#cw-carousel",
  quality: "div.container.m-b-lg.m-t-none>div.row",
};

import { StudioModel } from "./studio.mode";

export const imgLink: string =
  "https://medianet.com/cro/graberblinds/gb009/studio.png";

export const studioModels: StudioModel[] = [
  {
    id: "anc",
    link: "https://www.graberblinds.com/design-studios/apex/",
    title: "Design Studio",
    subTitle: "VISIT OUR",
    linkText: "STOP IN TODAY",
    description: "",
    location: "APEX, NC",
    round: 2,
    variation: "0",
  },
  {
    id: "bmn",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "BURNSVILLE, MN",
    round: 2,
    variation: "0",
  },
  {
    id: "mpsc",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "MOUNT PLEASANT, SC",
    round: 2,
    variation: "0",
  },
  {
    id: "rca",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "ROSEVILLE, CA",
    round: 2,
    variation: "0",
  },
  {
    id: "ctn",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "CHATTANOOGA, TN",
    round: 2,
    variation: "0",
  },
  {
    id: "anc",
    link: "https://www.graberblinds.com/design-studios/apex/",
    title: "Visit Our Design Studio",
    subTitle: "",
    linkText: "VISIT TODAY",
    description:
      "Interactive displays, in-store swatching, and more! An elevated way to shop for custom window treatments. Browse a wide variety of blinds, shades, drapes, and shutters today!",
    location: "APEX, NC",
    round: 2,
    variation: "1",
  },
  {
    id: "bmn",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "",
    title: "Visit Our Design Studio",
    linkText: "VISIT TODAY",
    description:
      "Interactive displays, in-store swatching, and more! An elevated way to shop for custom window treatments. Browse a wide variety of blinds, shades, drapes, and shutters today!",
    location: "BURNSVILLE, MN",
    round: 2,
    variation: "1",
  },
  {
    id: "mpsc",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "",
    title: "Visit Our Design Studio",
    linkText: "VISIT TODAY",
    description:
      "Interactive displays, in-store swatching, and more! An elevated way to shop for custom window treatments. Browse a wide variety of blinds, shades, drapes, and shutters today!",
    location: "MOUNT PLEASANT, SC",
    round: 2,
    variation: "1",
  },
  {
    id: "rca",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "",
    title: "Visit Our Design Studio",
    linkText: "VISIT TODAY",
    description:
      "Interactive displays, in-store swatching, and more! An elevated way to shop for custom window treatments. Browse a wide variety of blinds, shades, drapes, and shutters today!",
    location: "ROSEVILLE, CA",
    round: 2,
    variation: "1",
  },
  {
    id: "ctn",
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    subTitle: "",
    title: "Visit Our Design Studio",
    linkText: "VISIT TODAY",
    description:
      "Interactive displays, in-store swatching, and more! An elevated way to shop for custom window treatments. Browse a wide variety of blinds, shades, drapes, and shutters today!",
    location: "CHATTANOOGA, TN",
    round: 2,
    variation: "1",
  },
];

export const triggerEvent = (apiName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: apiName,
  });

  console.log("event-triggered=", apiName);
};

export const id: string = "anc";
