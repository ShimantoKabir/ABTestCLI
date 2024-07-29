import { BlindCard } from "../models/blind-card";

export const selectors = {
  heroBanner: "main#main-content>div>div.container-xl",
  blindCards: "div.m-b-lg>div.card-container.container-xl>div>a",
};

export const swiperLibrary = {
  js: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  css: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
};

export const rightArrowSvg = `
  <svg width="45" height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 48L37 26L3 4" stroke="white" stroke-width="8"/>
  </svg>
`;

export const leftArrowSvg = `
  <svg width="45" height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 4L8 26L42 48" stroke="white" stroke-width="8"/>
  </svg>
`;

const appStore: string =
  "https://apps.apple.com/us/app/graber-visualizer/id1630813310";
const playStore: string =
  "https://play.google.com/store/apps/details?id=com.springswf.graber.visualiser";

export const infos: BlindCard[] = [
  {
    id: 1,
    description: `Simply upload a photo of your window and start designing—or choose from our portfolio of sample room scenes. Then preview your picture-perfect treatments.<div class="break" ></div> Using a mobile device? Try the new Graber Visualizer App—available for download on the <a href='${appStore}' >App Store</a> and <a href="${playStore}" >Google Play</a>.`,
    heading: "View Window Treatments on Your Own Window—Virtually",
    href: "https://www.graberblinds.com/visualization/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/visual.png",
    hrefText: "GRABER VISUALIZER",
  },
  {
    id: 2,
    description: `Find a Graber expert to answer all your questions.<div class="break" ></div> Let one of our experts show you custom window treatment solutions designed for your space. Let them take care of measuring and installation, too, so you're guaranteed a perfect finish you'll love for years.`,
    heading: "Window Treatment Questions?",
    href: "https://www.graberblinds.com/find-an-expert/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/exparts.png",
    hrefText: "CONSULT A GRABER EXPERT",
  },
  {
    id: 3,
    description: `Experiencing Graber quality materials firsthand is the perfect way to choose the style, fabric, material, pattern, and texture that’s right for you. Select a product category and sort by function, color, or collection to easily find and order swatches that match your style.`,
    heading: "Order a Free Swatch",
    href: "https://www.graberblinds.com/free-swatches/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/swatches.png",
    hrefText: "FIND SWATCHES",
  },
];

export const footerItems: BlindCard[] = [
  {
    id: 1,
    heading: "LIFETIME WARRANTY",
    description:
      "Eight decades of know-how go into every Graber window treatment, backed by a limited lifetime warranty.",
    hrefText: "REVIEW WARRANTY DETAILS",
    href: "https://www.graberblinds.com/why-graber/warranty-coverage/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/waranty.png",
  },
  {
    id: 2,
    heading: "FREE SWATCHES",
    description:
      "How will Graber fabrics, woods, and materials look and feel in your home? Get 15 free swatches delivered right to your door.",
    hrefText: "ORDER FREE SAMPLES",
    href: "https://www.graberblinds.com/free-swatches/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/car.png",
  },
  {
    id: 2,
    heading: "ROOM VISUALIZER",
    description:
      "Save photos and swatches to My Favorites, then download to share with friends and your Graber Expert.",
    hrefText: "FIND YOUR FAVORITES",
    href: "https://www.graberblinds.com/visualization/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb008/eye.png",
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
