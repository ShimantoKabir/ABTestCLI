import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerEvent } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    if (window.innerWidth > 767) {
      return;
    }

    const btnFilter: null | HTMLButtonElement = document.querySelector(
      selectors.btnFilter
    );

    const topNavSwatchCount: null | HTMLButtonElement = document.querySelector(
      selectors.topNavSwatchCountList + ">a>span:last-child"
    );

    btnFilter &&
      btnFilter.addEventListener("click", () => {
        this.variation === "0" && triggerEvent("filter-and-sort-button-click");
      });

    if (this.variation === "0") {
      return;
    }

    const mobileTabSelector: null | HTMLButtonElement = document.querySelector(
      selectors.mobileTabSelector
    );

    const placeOrderButton: null | HTMLButtonElement = document.querySelector(
      selectors.placeOrderButton
    );

    if (!btnFilter || !mobileTabSelector || !placeOrderButton) {
      return;
    }

    mobileTabSelector.insertAdjacentElement(
      "beforeend",
      btnFilter.cloneNode(true) as Element
    );

    btnFilter.classList.add("old-btn-filter");

    const newBtnFilter: null | HTMLButtonElement = document.querySelector(
      selectors.mobileTabSelector + ">button"
    );

    newBtnFilter &&
      newBtnFilter.addEventListener("click", () => {
        btnFilter.click();
        triggerEvent("filter-and-sort-button-click");
      });

    placeOrderButton.insertAdjacentHTML(
      "beforeend",
      `<span class="swatch-count-badge hide" ></span>`
    );

    const swatchCountBadge: null | HTMLButtonElement = document.querySelector(
      "span.swatch-count-badge"
    );

    this.makeTabSticky();
    this.showSwatchCountOnInit(swatchCountBadge, topNavSwatchCount);
    swatchCountBadge && this.observeSwatchCount(swatchCountBadge);
  };

  showSwatchCountOnInit = (
    swatchCountBadge: null | HTMLButtonElement,
    topNavSwatchCount: null | HTMLButtonElement
  ) => {
    if (
      topNavSwatchCount &&
      topNavSwatchCount.classList.contains("swatch-count") &&
      swatchCountBadge
    ) {
      swatchCountBadge.classList.remove("hide");
      swatchCountBadge.textContent = topNavSwatchCount.textContent;
    }
  };

  makeTabSticky = () => {
    const tabSection: null | HTMLElement = document.querySelector(
      selectors.tabSection
    );

    const swatchContainer: null | HTMLElement = document.querySelector(
      selectors.swatchContainer
    );

    if (!tabSection || !swatchContainer) {
      return;
    }

    window.onscroll = () => {
      if (window.scrollY >= swatchContainer.offsetTop) {
        tabSection.classList.add("sticky");
      } else {
        tabSection.classList.remove("sticky");
      }
    };
  };

  observeSwatchCount = (swatchCountBadge: HTMLButtonElement) => {
    const testObserver = new TestObserver(selectors.topNavSwatchCountList);
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.classList.contains("swatch-count")) {
          swatchCountBadge.classList.remove("hide");
          swatchCountBadge.textContent = target.textContent;
        } else if (
          target.classList.contains("nav-link") &&
          target.lastElementChild &&
          target.lastElementChild.classList.contains("swatch-count")
        ) {
          swatchCountBadge.classList.remove("hide");
          swatchCountBadge.textContent = target.lastElementChild.textContent;
        } else if (
          target.classList.contains("nav-link") &&
          target.lastElementChild &&
          target.lastElementChild.classList.contains("free-swatches-text")
        ) {
          swatchCountBadge.classList.add("hide");
        }
      }
    };

    testObserver.observe(callback);
  };

  getTotalSwatchCount = (): string | null => {
    const swatchCount: null | HTMLButtonElement = document.querySelector(
      selectors.swatchCount
    );

    if (swatchCount && swatchCount.textContent) {
      return swatchCount.textContent;
    }

    return null;
  };
}
