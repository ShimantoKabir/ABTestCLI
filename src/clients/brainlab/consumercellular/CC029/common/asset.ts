export const selectors = {
  promoSection: "div.grid-container > div.promo.grid-item-container",
};

export const imageInfos = [
  {
    variation: "1",
    images: [
      {
        imageUrl:
          "https://brainlabs.digital/cro/consumercellular/cc029/razar.jpg",
        link: "https://savings.consumercellular.com/motorolarazrprelaunch",
      },
      {
        imageUrl:
          "https://brainlabs.digital/cro/consumercellular/cc029/samsung.jpg",
        link: "https://savings.consumercellular.com/samsungprelaunch",
      },
    ],
  },
  {
    variation: "2",
    images: [
      {
        imageUrl:
          "https://brainlabs.digital/cro/consumercellular/cc029/razar-two.jpg",
        link: "https://www.consumercellular.com/shopping/details/motorola_razr_2024/overview",
      },
      {
        imageUrl:
          "https://brainlabs.digital/cro/consumercellular/cc029/samsung-two.jpg",
        link: "https://www.consumercellular.com/shopping/choose/device?filters=Samsung",
      },
    ],
  },
];

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
