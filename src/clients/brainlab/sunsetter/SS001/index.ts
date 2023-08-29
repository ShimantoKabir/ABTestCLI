import { Initializer } from "../../../../utilities/initializer";
import { TestInfo } from "./common/test.info";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

function addFindDealerSubmitButtonEvent(eventName: string) {
  Initializer.init(TestInfo, "0.0.2");
  const submitButton: null | HTMLInputElement = document.querySelector(
    "input.button-submit"
  );

  if (submitButton) {
    submitButton.addEventListener("click", () => {
      console.log("submit-button-clicked");
      // @ts-ignore
      window["optimizely"] = window["optimizely"] || [];
      // @ts-ignore
      window["optimizely"].push({
        type: "event",
        eventName: eventName,
      });
    });
  }
}

function runTest() {
  Initializer.init(TestInfo, "0.0.2");
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
  } else if (
    window.location.pathname === "/cm/find-a-dealer/" &&
    document.querySelector("input.button-submit")
  ) {
    addFindDealerSubmitButtonEvent("find-a-dealer-form-submit");
  } else if (
    window.location.pathname === "/cm/customer-information/" &&
    document.querySelector("input.button-submit")
  ) {
    addFindDealerSubmitButtonEvent("customer-information-form-submit");
  } else {
    setTimeout(pollOnload, 25);
  }
})();
