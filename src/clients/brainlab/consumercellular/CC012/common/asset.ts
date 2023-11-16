import { QuickFilterModel } from "../models/quick-filter-model";

export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  gridContainer: "div.grid-container",
};

export const pathnames = {
  device: "/shopping/choose/device",
};

export const getSpecificFilterMenuHierarchy = (
  parentPosition: number,
  childPosition: number
): string => {
  return `div.filter-buttons>div.selection-modifier>div.filter-menu>section:nth-child(${parentPosition})>ul>li:nth-child(${childPosition})>div`;
};

export const quickFilters: QuickFilterModel[] = [
  {
    id: 1,
    label: "Apple",
    parentPosition: 1,
    childPosition: 1,
  },
  {
    id: 2,
    label: "Motorola",
    parentPosition: 1,
    childPosition: 3,
  },
  {
    id: 3,
    label: "Nokia",
    parentPosition: 1,
    childPosition: 4,
  },
];

export const mboxNames = {
  devicePageVisit: "device-page-visit",
  filterCtaClick: "filter-cta-click",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};
