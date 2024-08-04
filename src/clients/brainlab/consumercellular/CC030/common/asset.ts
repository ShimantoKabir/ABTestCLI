export const selectors = {
  firstSlide: "div.cmp-carousel div.slick-track>div:first-child",
  carousalSection: "main.chakra-container>div.aem-container>div:nth-child(1)",
  reviewSection: "main.chakra-container>div.aem-container>div:nth-child(2)",
  zipSearchSection: "main.chakra-container>div.aem-container>div:nth-child(5)",
};

// export const slideDesktopBgUrl: string =
//   "https://brainlabs.digital/cro/consumercellular/cc030/slide-desktop-bg.jpg";

export const slideMobileBgUrl: string =
  "https://brainlabs.digital/cro/consumercellular/cc030/slide-mobile-bg.jpg";

// export const slideDesktopBgUrl: string =
//   "http://localhost:3030/slide-desktop-bg.jpg";

// export const slideMobileBgUrl: string =
//   "http://localhost:3030/slide-mobile-bg.jpg";

export const rightIconSvg: string = `
<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="2.26777" y1="9.23223" x2="10.2678" y2="17.2322" stroke="#F26531" stroke-width="5" />
  <line x1="6.73223" y1="17.2322" x2="21.7322" y2="2.23223" stroke="#F26531" stroke-width="5" />
</svg>
`;

export const shopPhoneLink: string =
  " https://www.consumercellular.com/shopping/choose/device";

export const bringYourLink: string =
  "https://www.consumercellular.com/shopping/details/sim/details";

export const viewPlanLink: string =
  "https://www.consumercellular.com/shopping/choose/plan";

export const plans = [
  {
    data: "1GB",
    month: 20,
  },
  {
    data: "5GB",
    month: 25,
  },
  {
    data: "10GB",
    month: 35,
  },
  {
    data: "Unlimited Data",
    month: 50,
  },
];

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
