export const selectors = {
  images: "div.image-text>div.image-text-wrapper>div.image>img",
  applyButtons: "div.rfi-btn>a",
  formSubmitButton: "button.form-submit",
};

export const imageUrlPrefix: string = "https://medianet.com/cro/fortis/fr007";

export const getImageUrl = (variation: string, index: number) => {
  return `${imageUrlPrefix}/${variation}-${index}.jpg`;
};

export const triggerMetrics = (mboxName: string) => {
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
};
