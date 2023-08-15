import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const priceModuleSelector: string =
  "div#header-prototype-app div.shopping-due-today-display-wrapper";
const placeOrderButtonSelector: string = "div.hide-desktop-up>div>button";

const getBottomPriceModule = (): null | HTMLDivElement => {
  return document.querySelector(
    "div.submit-section>div.shopping-due-today-display-wrapper"
  );
};

const runTest = () => {
  const priceModule: null | HTMLDivElement =
    document.querySelector(priceModuleSelector);

  document.addEventListener("scroll", (event) => {
    if (
      window.location.pathname === "/shopping/checkout" &&
      priceModule &&
      window.innerWidth < 719
    ) {
      window.scrollY === 0
        ? priceModule.classList.remove("hide-component")
        : priceModule.classList.add("hide-component");
    }
  });

  const placeOrderButton: null | HTMLButtonElement = document.querySelector(
    placeOrderButtonSelector
  );

  if (priceModule && placeOrderButton) {
    const priceModuleClone = priceModule.cloneNode(true) as HTMLDivElement;

    priceModuleClone.classList.remove("hide-component");

    if (!getBottomPriceModule()) {
      placeOrderButton.insertAdjacentElement(
        "beforebegin",
        priceModuleClone as Element
      );
    }
  }

  if (placeOrderButton) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log("entry=", entry);
        if (entry.isIntersecting) {
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(placeOrderButton as Element);
  }
};

if (!ieChecks) {
  Initializer.init(TestInfo, "0.0.1");
  const poller = new Poller();
  poller.poll(["body", priceModuleSelector, placeOrderButtonSelector], runTest);
}
