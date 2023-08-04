import { Initializer } from "../../../../utilities/initializer";
import { Poller } from "../../../../utilities/poller";
import { selectors } from "./common/asset";
import { TestInfo } from "./common/test.info";
import { ButtonComponent } from "./components/button.component";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

const runTest = () => {
  const buttonComponent = new ButtonComponent();
  buttonComponent.render();
};

if (!ieChecks) {
  Initializer.init(TestInfo, "0.0.1");
  const poller = new Poller();
  poller.poll(["body", selectors.modelFooter], runTest);
}
