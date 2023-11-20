export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  desktopAarpCheckbox:
    "div.hide-desktop-down>div.aarp-info>div>div.base-checkbox-component",
  mobileAarpCheckbox: "div.hide-desktop-up>div.base-checkbox-component",
  circles: "div.phone-selector>div.fa-circle",
  desktopPlans:
    "section.most-plans>div:nth-child(3)>div.plan-selection-wrapper>button>div.body>span.monthly-charge",
  desktopPlanButtons:
    "section.most-plans>div:nth-child(3)>div.plan-selection-wrapper>button",
  desktopMonthlyChargeUnits:
    "section.most-plans>div:nth-child(3)>div.plan-selection-wrapper>button>div.body>div.monthly-charge-units",
  mobilePlans:
    "section.most-plans>div:nth-child(3)>div.slider-wrapper>div.slick-slider>div.slick-list>div.slick-track>button.combo-plan>div.body>span.monthly-charge",
  mobilePlanButtons:
    "section.most-plans>div:nth-child(3)>div.slider-wrapper>div.slick-slider>div.slick-list>div.slick-track>button.combo-plan",
  mobileMonthlyChargeUnits:
    "section.most-plans>div:nth-child(3)>div.slider-wrapper>div.slick-slider>div.slick-list>div.slick-track>button.combo-plan>div.body>div.monthly-charge-units",
};

export const pathnames = {
  plan: "/shopping/choose/plan",
};

export const mBoxNames = {
  lineClick: "line-click",
  planClick: "plan-click",
  aarpClick: "aarp-click",
  planPageVisit: "plan-page-visit",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};
