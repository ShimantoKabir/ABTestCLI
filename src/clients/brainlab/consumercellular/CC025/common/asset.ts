export const selectors = {
  promoCodeInput: "form.promo-code-input-frame>input",
  promoCodeSubmit: "form.promo-code-input-frame>button",
  promoCodeFrame: "div.input-component-frame",
  discountAppliedText: "div.discount-applied-copy",
  cart: "a[href='/shopping']",
};

export const redeemNowLink: string =
  "https://www.consumercellular.com/shopping";

export const storageKey: string = "is-promo-popup-already-shown";
export const visitedLocationsStorageKey: string = "visited-locations";
export const promoCode: string = "DEAL25";

export const closeIconSvg: string = `
<svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.54637 2L18 18M2 18L17.4536 2" stroke="white" stroke-width="3.5"/>
</svg>
`;

export const isMobile = (): boolean => {
  return window.innerWidth > 719 ? false : true;
};
