import { Poller } from "../../../../utilities/poller";
import { modalStatusKey, selectors } from "./common/asset";
import { LineSelectionManager } from "./components/line-selection-manager";
import { MainComponent } from "./components/main.component";
import { ModalComponent } from "./components/modal.component";
import { PhoneNumberChangerComponent } from "./components/phone-number-changer.component";
import { TestObserver } from "./observer/test.observer";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

if (!ieChecks) {
  const main = new MainComponent();
  const poller = new Poller();
  poller.poll(
    ["body", selectors.existPlanSection, selectors.planContainer],
    main.init
  );

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("plan") && urlParams.has("line")) {
    const plan = Number(urlParams.get("plan"));
    const line = Number(urlParams.get("line"));

    const phoneNumberChangerComponent = new PhoneNumberChangerComponent();
    phoneNumberChangerComponent.changeMainAppPhoneNumber();

    const lineSelectionManager = new LineSelectionManager(plan, line);
    lineSelectionManager.select();
  }

  const testObserver = new TestObserver(selectors.shoppingPageContainer);

  const callback = (mutationList: any, observer: any) => {
    const modalStatus = localStorage.getItem(modalStatusKey);
    if (modalStatus === "true" && window.location.pathname === "/shopping") {
      const modalComponent = new ModalComponent();
      modalComponent.render();
    }
  };

  testObserver.observe(callback);
}
