import { Feature } from "./feature.model";

export const selectors = {
  card: "div.m-b-lg>div.card-container>div.row>a",
  featureSection: "main#main-content>div>div:nth-child(4)",
};

const appStore: string =
  "https://apps.apple.com/us/app/graber-visualizer/id1630813310";
const playStore: string =
  "https://play.google.com/store/apps/details?id=com.springswf.graber.visualiser";

export const features: Feature[] = [
  {
    id: 1,
    description: `Simply upload a photo of your window and start designing—or choose from our portfolio of sample room scenes. Then preview your picture-perfect treatments.<div class="break" ></div> Using a mobile device? Try the new Graber Visualizer App—available for download on the <a href='${appStore}' >App Store</a> and <a href="${playStore}" >Google Play</a>.`,
    heading: "View Window Treatments on Your Own Window—Virtually",
    href: "https://www.graberblinds.com/visualization/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb010/visual.jpg",
    hrefText: "GRABER VISUALIZER",
    eventName: "visualizer-link-click",
  },
  {
    id: 2,
    description: `Find a Graber expert to answer all your questions.<div class="break" ></div> Let one of our experts show you custom window treatment solutions designed for your space. Let them take care of measuring and installation, too, so you're guaranteed a perfect finish you'll love for years.`,
    heading: "Window Treatment Questions?",
    href: "https://www.graberblinds.com/find-an-expert/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb010/expart.jpg",
    hrefText: "CONSULT A GRABER EXPERT",
    eventName: "expert-link-click",
  },
  {
    id: 3,
    description: `Experiencing Graber quality materials firsthand is the perfect way to choose the style, fabric, material, pattern, and texture that’s right for you. Select a product category and sort by function, color, or collection to easily find and order swatches that match your style.`,
    heading: "Order a Free Swatch",
    href: "https://www.graberblinds.com/free-swatches/",
    imgSrc: "https://medianet.com/cro/graberblinds/gb010/swatch.jpg",
    hrefText: "ORDER SWATCHES",
    eventName: "swatch-order-link-click",
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
