export const selectors = {
  shadeSelector: "div.container-fluid.graber-blue-15.m-b-none.m-t-none",
  motorization: "div.motorization>div:nth-child(3)",
  controlOptions: "div.motorization>div:nth-child(4)",
  smartHomeDevices: "div.motorization>div:nth-child(5)",
  solutionsGallery: "div.motorization>div:nth-child(6)",
  comparison: "div.motorization>div:nth-child(7)",
  faq: "div.motorization>div:nth-child(8)",
};

export const menus = [
  {
    text: "Benefits",
    href: "#benefits",
    apiName: "benefits",
    selector: selectors.motorization,
  },
  {
    text: "Control Options",
    href: "#control-options",
    apiName: "control-options",
    selector: selectors.controlOptions,
  },
  {
    text: "Smart Home Devices",
    href: "#smart-home-devices",
    apiName: "smart-home-devices",
    selector: selectors.smartHomeDevices,
  },
  {
    text: "Solutions Gallery",
    href: "#solutions-gallery",
    apiName: "solutions-gallery",
    selector: selectors.solutionsGallery,
  },
  {
    text: "Comparisons",
    href: "#comparison",
    apiName: "comparison",
    selector: selectors.comparison,
  },
  {
    text: "FAQs",
    href: "#faqs",
    apiName: "faqs",
    selector: selectors.faq,
  },
];
