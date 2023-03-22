import { Initializer } from "../../../../../utilities/initializer";
import { Poller } from "../../../../../utilities/poller";
import { selector } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { BannerTextComponent } from "./banner-text.component";

export class MainComponent {
  disclaimerSelector = "div.mktoHtmlText";

  init = (): void => {
    Initializer.init(TestInfo, "0.0.3");

    document
      .querySelector(selector.heroBannerSelector)
      ?.insertAdjacentHTML("afterend", BannerTextComponent.render());

    document
      .querySelector(selector.headingTextSelector)
      ?.classList.add(`${TestInfo.ID}__hide`);

    const clonedForm = document
      .querySelector(selector.fromSelector)
      ?.cloneNode(true);
    document.querySelector(selector.fromSelector)?.remove();

    if (clonedForm) {
      document
        .querySelector(selector.desktopBannerSelector)
        ?.insertAdjacentElement("beforeend", clonedForm as Element);
    }

    const poller = new Poller();
    poller.poll([this.disclaimerSelector], () => {
      document.querySelectorAll(this.disclaimerSelector)?.forEach((elm) => {
        elm.removeAttribute("style");
      });
    });
  };
}
