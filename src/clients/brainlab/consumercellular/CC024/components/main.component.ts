import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isElementFound: boolean = false;
  isByodFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "3.5.5");
  }

  init = (): void => {
    const body: HTMLBodyElement | null = document.querySelector("body");

    LocationObserver.listen((location: string) => {
      this.isElementFound = false;
      this.isByodFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        // console.log("classlist=", target);

        if (
          target.innerHTML &&
          target.innerHTML.length > 270000 &&
          !this.isElementFound
        ) {
          this.addListener();

          this.isElementFound = true;
        }

        if (
          target.classList &&
          target.classList.contains("product-tile") &&
          !this.isByodFound
        ) {
          setTimeout(() => {
            body && this.addOrRemoveByod(body);
          }, 500);
          this.isByodFound = true;
        }
      }
    };

    testObserver.observe(callback);

    this.observeUrlChange();
  };

  addListener = () => {
    const ownDevice: HTMLDivElement | null = document.querySelector(
      selectors.ownDevice
    );

    if (!ownDevice) {
      return;
    }

    ownDevice.addEventListener("click", () => {
      triggerMetrics("bring-your-own-device-click");
    });
  };

  observeUrlChange = () => {
    let oldHref = document.location.href;
    const body = document.querySelector("body");
    const observer = new MutationObserver((mutations) => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        body && this.addOrRemoveByod(body);
      }
    });
    body && observer.observe(body, { childList: true, subtree: true });
  };

  addOrRemoveByod = (body: HTMLBodyElement) => {
    if (this.isFirstProductByod()) {
      body && body.classList.add("byod");
    } else {
      body && body.classList.remove("byod");
    }
  };

  isFirstProductByod = (): boolean => {
    const byodLink: HTMLAnchorElement | null = document.querySelector(
      selectors.byodLink
    );

    console.log("byod-link=", byodLink);

    if (
      byodLink &&
      byodLink.getAttribute("href") &&
      byodLink.getAttribute("href") === "/shopping/details/sim"
    ) {
      return true;
    } else {
      return false;
    }
  };
}
