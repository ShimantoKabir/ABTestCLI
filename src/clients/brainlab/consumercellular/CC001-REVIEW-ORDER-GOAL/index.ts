import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { selectors } from "./common/asset";
import { TestInfo } from "./common/test.info";
import { ButtonObserver } from "./observer/button.observer";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

let isGoalAdded: boolean = false;

const addReviewOrderGoal = () => {
  Initializer.init(TestInfo, "0.0.2");
  const reviewOrderButtons: null | NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(
      `${selectors.checkoutBtn1}, ${selectors.checkoutBtn2}`
    );

  if (reviewOrderButtons && reviewOrderButtons.length > 1) {
    reviewOrderButtons.forEach((button: HTMLAnchorElement) => {
      isGoalAdded = true;
      button.addEventListener("click", () => {
        console.log("review-order-mbox-clicked");
        // @ts-ignore
        adobe.target.trackEvent({ mbox: "review-order" });
      });
    });
  }
};

const runTest = () => {
  const buttonObserver = new ButtonObserver(selectors.shoppingPageContainer);

  const callback = (mutationList: any, observer: any) => {
    for (const mutation of mutationList) {
      if (mutation.target.classList.contains("affix")) {
        if (window.location.pathname !== "/shopping") {
          isGoalAdded = false;
        }
        if (!isGoalAdded) {
          addReviewOrderGoal();
        }
        break;
      }
    }
  };

  buttonObserver.observe(callback);
};

if (!ieChecks) {
  const poller = new Poller();
  poller.poll(["body"], runTest);
}
