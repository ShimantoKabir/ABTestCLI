import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { selectors } from "./common/asset";
import { TestInfo } from "./common/test.info";
import { ButtonObserver } from "./observer/button.observer";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const changeBtnText = (checkoutBtns: NodeListOf<Element>, text: string) => {
  checkoutBtns.forEach((btn) => {
    btn.textContent = text;
  });
};

const startOperation = () => {
  const checkoutBtns: null | NodeListOf<Element> = document.querySelectorAll(
    `${selectors.checkoutBtn1}, ${selectors.checkoutBtn2}`
  );

  if (checkoutBtns && checkoutBtns.length > 0) {
    if (TestInfo.VARIATION.toString() === "1") {
      changeBtnText(checkoutBtns, "Checkout");
    } else if (TestInfo.VARIATION.toString() === "2") {
      changeBtnText(checkoutBtns, "Continue To Shipping");
    }
  }
}

const runTest = () => {
  Initializer.init(TestInfo, "0.0.1");

  startOperation();

  const buttonObserver = new ButtonObserver(selectors.shopingPageContainer);

  const callback = (mutationList: any, observer: any) => {
    for (const mutation of mutationList) {
      if (
        mutation.target.href ===
        "https://consumercellular.com/shopping/checkout" ||
        mutation.target.classList.contains("affix") || 
        mutation.target.classList.contains("price-detail")
      ) {
        startOperation();
        break;
      }
    }
  };

  buttonObserver.observe(callback);
};

if (!ieChecks) {
  const poller = new Poller();
  poller.poll(
    ["body", selectors.checkoutBtn1, selectors.checkoutBtn2],
    runTest
  );
}
