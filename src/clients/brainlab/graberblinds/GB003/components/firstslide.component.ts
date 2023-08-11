import { images, selectors, windowAndDoorLink } from "../common/asset";

export class FirstSlideComponent {
  getHtmlString = (): string => {
    const htmlString = `
      <div class="first-slide-component" >
        <div class="component-head" >
          <h2 class="main-heading--lg" >Find Your Match</h2>
          <p class="body--lg" >START BY SELECTING THE SHAPE OF YOUR WINDOW OR DOOR</p>
        </div>
        <div class="component-main" >
          <div class="top-window-doors" >
            <a class="wd-link" href="${windowAndDoorLink}" alt="window-and-door" >
              <img src="${images.standardWindow}" alt="standard-window" >
              <p>Standard Window</p>
            </a>
            <a class="wd-link" href="${windowAndDoorLink}" alt="window-and-door" >
              <img src="${images.bayWindow}" alt="bay-window" >
              <p>Bay Window</p>
            </a>
            <a class="wd-link" href="${windowAndDoorLink}" alt="window-and-door" >
              <img src="${images.specialtyWindow}" alt="specialty-window" >
              <p>Specialty Window</p>
            </a>
          </div>
          <div class="bottom-window-doors" >
            <a class="wd-link" href="${windowAndDoorLink}" alt="window-and-door" >
              <img src="${images.slidingDoor}" alt="sliding-door" >
              <p>Sliding Door</p>
            </a>
            <a class="wd-link" href="${windowAndDoorLink}" alt="window-and-door" >
              <img src="${images.frenchDoor}" alt="french-door" >
              <p>French Door</p>
            </a>
          </div>
        </div>
        <div class="component-footer" >
          <a class="btn btn-primary" href="${windowAndDoorLink}" target="_blank">Start Now</a>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
  addClickListener = (): void => {};

  renderV1 = (): void => {
    const firstSlide: null | HTMLDivElement = document.querySelector(
      selectors.firstSlide
    );

    if (firstSlide) {
      firstSlide.insertAdjacentHTML("afterbegin", this.getHtmlString());
    }
  };

  renderV2 = (): void => {
    const productAdvisor: null | HTMLDivElement = document.querySelector(
      selectors.productAdvisor
    );

    if (productAdvisor) {
      productAdvisor.insertAdjacentHTML(
        "beforebegin",
        `<div class="shape-product-advisor" >${this.getHtmlString()}</div>`
      );
    }
  };
}
