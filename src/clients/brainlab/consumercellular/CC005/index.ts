import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const priceModuleSelector: string =
  "div#header-prototype-app div.shopping-due-today-display-wrapper";

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
};

if (!ieChecks) {
  Initializer.init(TestInfo, "0.0.1");
  const poller = new Poller();
  poller.poll(["body", priceModuleSelector], runTest);
}
