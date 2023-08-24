import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { buyingButtonHTML, buyingButtonHref, selectors } from "./common/asset";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const runTest = () => {
  const buyingButton: null | HTMLAnchorElement = document.querySelector(
    selectors.buyingButton
  );

  if (buyingButton) {
    console.log("buying-button=", buyingButton);
    buyingButton.textContent = "";
    buyingButton.setAttribute("href", buyingButtonHref);
    buyingButton.insertAdjacentHTML("beforeend", buyingButtonHTML);
  }
};

if (!ieChecks) {
  Initializer.init(TestInfo, "0.0.1");
  const poller = new Poller();
  poller.poll(["body"], runTest);
}
