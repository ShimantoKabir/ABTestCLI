export const selectors = {
  treatment: "section.multi-column-main>div:first-child>div:nth-child(2)",
  shape: "div.shape-component",
};

export const shapes = [
  {
    link: "https://www.baliblinds.com/get-started/interactive-product-guide/?option=StandardWindow",
    img: "https://www.graberblinds.com/siteassets/images/advisor/advisor-shape-1.svg",
    label: "StandardWindow",
  },
  {
    link: "https://www.baliblinds.com/get-started/interactive-product-guide/?option=BayWindow",
    img: "https://www.graberblinds.com/siteassets/images/advisor/advisor-shape-2.svg",
    label: "BayWindow",
  },
  {
    link: "https://www.baliblinds.com/get-started/interactive-product-guide/?option=SlidingDoor",
    img: "https://www.graberblinds.com/siteassets/images/advisor/advisor-shape-3.svg",
    label: "SlidingDoor",
  },
  {
    link: "https://www.baliblinds.com/get-started/interactive-product-guide/?option=FrenchDoor",
    img: "https://www.graberblinds.com/siteassets/images/advisor/advisor-shape-4.svg",
    label: "FrenchDoor",
  },
  {
    link: "https://www.baliblinds.com/get-started/interactive-product-guide/?option=SpecialtyShape",
    img: "https://www.graberblinds.com/siteassets/images/advisor/advisor-shape-5.svg",
    label: "SpecialtyShape",
  },
];

export const onScrollToTreatmentEvent = () => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: "on-scroll-to-modification",
  });
  console.log("on-scroll-to-modification-goal-triggered");
};
