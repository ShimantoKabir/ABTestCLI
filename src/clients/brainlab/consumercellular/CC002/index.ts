import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { images, selectors } from "./common/asset";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const runTest = () => {
  const firstSlideImg: null | Element = document.querySelector(
    selectors.firstSlideImg
  );

  if (firstSlideImg) {
    if (TestInfo.VARIATION.toString() == "1") {
      firstSlideImg.setAttribute("src", images.getStarted.desktop);

      if (document.body.clientWidth < 901) {
        firstSlideImg.setAttribute("src", images.getStarted.mobile);
      }
    } else if (TestInfo.VARIATION.toString() === "2") {
      firstSlideImg.setAttribute("src", images.viewAllPlan.desktop);

      if (document.body.clientWidth < 901) {
        firstSlideImg.setAttribute("src", images.viewAllPlan.mobile);
      }
    }
  }
};

if (!ieChecks) {
  const poller = new Poller();
  poller.poll(["body", selectors.firstSlideImg], () => {
    Initializer.init(TestInfo, "0.0.1");
    runTest();
  });
}
