export const selectors = {
  carousal: "div#cw-carousel",
  quality: "div.container.m-b-lg.m-t-none>div.row",
};

import { StudioModel } from "./studio.mode";

export const imgLink: string =
  "https://medianet.com/cro/graberblinds/gb009/studio.png";

export const studioModels: StudioModel[] = [
  {
    link: "https://www.graberblinds.com/design-studios/apex/",
    variation: "anc",
    title: "Design Studio",
    subTitle: "VISIT OUR",
    linkText: "STOP IN TODAY",
    description: "",
    location: "APEX, NC",
    round: 1,
  },
  {
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    variation: "bmn",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "BURNSVILLE, MN",
    round: 1,
  },
  {
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    variation: "mpsc",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "MOUNT PLEASANT, SC",
    round: 1,
  },
  {
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    variation: "rca",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "ROSEVILLE, CA",
    round: 1,
  },
  {
    link: "https://www.graberblinds.com/design-studios/burnsville/",
    variation: "ctn",
    subTitle: "VISIT OUR",
    title: "Design Studio",
    linkText: "STOP IN TODAY",
    description: "",
    location: "CHATTANOOGA, TN",
    round: 1,
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
