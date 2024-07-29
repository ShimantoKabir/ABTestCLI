import { Poller } from "../../../../utilities/poller";
import { getAllSubHeadingSelectors } from "./common/asset";
import { MainComponent } from "./components/main.component";

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

if (!ieChecks) {
  const main = new MainComponent();
  const poller = new Poller();
  poller.poll(["body", getAllSubHeadingSelectors()], main.init);
}
