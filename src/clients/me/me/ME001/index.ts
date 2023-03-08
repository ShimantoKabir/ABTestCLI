import "reflect-metadata";
import { Poller } from "../../../../utilities/poller";
import { MainComponent } from "./components/main.component";
import { container } from "tsyringe";

const main = container.resolve(MainComponent);

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
  window.navigator.userAgent
);

if (!ieChecks) {
  const poller = new Poller();
  poller.poll(["body"], main.init);
}
