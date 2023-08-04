import { Initializer } from "../../../../utilities/initializer";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

function runTest() {
  Initializer.init(TestInfo, "0.0.1");
  // @ts-ignore
  RunIt04 = undefined;
  slideSelfCall();
}

function slideSelfCall() {
  // @ts-ignore
  plusSlides(1);
  setTimeout(slideSelfCall, 10000);
  console.log("self-called");
}

(function pollOnload() {
  if (
    !ieChecks &&
    // @ts-ignore
    typeof plusSlides === "function" &&
    // @ts-ignore
    typeof RunIt04 === "function"
  ) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 25);
  }
})();
