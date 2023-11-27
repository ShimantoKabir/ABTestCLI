export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  circles: "div.phone-selector>div.fa-circle",
  mostPlans: "section.most-plans",
  range: "div.range-component>input",
  mobilePlanButtons:
    "section.most-plans>div:nth-child(3)>div.slider-wrapper>div.slick-slider>div.slick-list>div.slick-track>button.combo-plan",
  nextArrow: "div.next-arrow>i",
  pervArrow: "div.prev-arrow>i",
  actionLink: "div.action-link",
  mobileActivePlan:
    "section.most-plans>div:nth-child(3)>div.slider-wrapper>div.slick-slider>div.slick-list>div.slick-track>button.slick-active",
  gbButtons: "div.gb-component>div.gb-cart>button",
  mobileSlickList: (nth: number) =>
    `section.most-plans>div:nth-child(${nth})>div.slider-wrapper>div.slick-slider>div.slick-list`,
};

export const sliderMoveRange: number[] = [1, 34, 67, 100];
export const gbRange: string[] = ["1GB", "5GB", "10GB", "UNLTD"];
export const mobileBreakPoint: number = 720;
export const step: number = 33;

export const mBoxNames = {
  lineClick: "line-click",
  slideMove: "slide-move",
  pageVisit: "page-visit",
};
