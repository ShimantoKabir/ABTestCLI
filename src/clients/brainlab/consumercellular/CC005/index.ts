import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { TestInfo } from "./common/test.info";
import { TestObserver } from "./observer/test.observer";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const priceModuleSelector: string =
  "div#header-prototype-app div.shopping-due-today-display-wrapper";
const placeOrderButtonSelector: string = "div.hide-desktop-up>div>button";
const navPriceModuleLabel = "div.nav-header";
const orderPriceModuleLabel = "div.submit-section";
const dueCommonSelector: string =
  ">div.shopping-due-today-display-wrapper.hide-phone-up>div>div.hide-phone-up.base-due-today-mobile>div.overview.base-due-today>";
const dueTailTodaySelector: string = "div:nth-child(1)>div:nth-child(2)";
const dueTailMonthlySelector: string =
  "div:nth-child(3)>div:nth-child(3)>div:nth-child(1)";
const navDueTodayFullSelector: string = `${navPriceModuleLabel}${dueCommonSelector}${dueTailTodaySelector}`;
const navDueMonthlyFullSelector: string = `${navPriceModuleLabel}${dueCommonSelector}${dueTailMonthlySelector}`;
const orderDueTodayFullSelector: string = `${orderPriceModuleLabel}${dueCommonSelector}${dueTailTodaySelector}`;
const orderDueMonthlyFullSelector: string = `${orderPriceModuleLabel}${dueCommonSelector}${dueTailMonthlySelector}`;
const bottomPriceModuleSelector: string =
  "div.submit-section>div.shopping-due-today-display-wrapper";

const updatePriceOnBottomPriceModule = () => {
  const navDueTodayPrice: null | HTMLDivElement = document.querySelector(
    navDueTodayFullSelector
  );

  const navDueMonthlyPrice: null | HTMLDivElement = document.querySelector(
    navDueMonthlyFullSelector
  );

  const orderDueTodayPrice: null | HTMLDivElement = document.querySelector(
    orderDueTodayFullSelector
  );

  const orderDueMonthlyPrice: null | HTMLDivElement = document.querySelector(
    orderDueMonthlyFullSelector
  );

  if (
    navDueTodayPrice &&
    navDueMonthlyPrice &&
    orderDueTodayPrice &&
    orderDueMonthlyPrice
  ) {
    const updateTodayDue = navDueTodayPrice.textContent;
    const updateMonthlyDue = navDueMonthlyPrice.textContent;

    orderDueTodayPrice.textContent = updateTodayDue;
    orderDueMonthlyPrice.textContent = updateMonthlyDue;
  }
};

const runTest = () => {
  document.addEventListener("scroll", (event) => {
    const priceModule: null | HTMLDivElement =
      document.querySelector(priceModuleSelector);

    if (
      window.location.pathname === "/shopping/checkout" &&
      priceModule &&
      window.innerWidth < 719
    ) {
      window.scrollY === 0
        ? priceModule.classList.remove("hide-component")
        : priceModule.classList.add("hide-component");

      const bottomPriceModule: null | HTMLButtonElement =
        document.querySelector(bottomPriceModuleSelector);
      const placeOrderButton: null | HTMLButtonElement = document.querySelector(
        placeOrderButtonSelector
      );

      if (!bottomPriceModule && placeOrderButton && window.scrollY > 200) {
        const priceModuleClone = priceModule.cloneNode(true) as HTMLDivElement;
        priceModuleClone.classList.remove("hide-component");
        placeOrderButton.insertAdjacentElement(
          "beforebegin",
          priceModuleClone as Element
        );
      }
    }

    if (
      window.location.pathname !== "/shopping/checkout" &&
      priceModule &&
      priceModule.classList.contains("hide-component") &&
      window.innerWidth < 719
    ) {
      priceModule.classList.remove("hide-component");
    }
  });

  const testObserver = new TestObserver("div.nav-header");

  const callback = (mutationList: MutationRecord[], observer: any) => {
    mutationList.forEach((entry: MutationRecord) => {
      if (entry.type === "characterData" && window.innerWidth < 719) {
        updatePriceOnBottomPriceModule();
      }
    });
  };

  testObserver.observe(callback);
};

if (!ieChecks) {
  Initializer.init(TestInfo, "0.0.1");
  const poller = new Poller();
  poller.poll(["body", priceModuleSelector], runTest);
}
