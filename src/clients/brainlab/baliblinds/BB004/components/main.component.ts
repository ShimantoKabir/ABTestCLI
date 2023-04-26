import { Initializer } from "../../../../../utilities/initializer";
import { Poller } from "../../../../../utilities/poller";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  private poller = new Poller();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const listElms = document.querySelectorAll<Element>(
      selectors.listSelector + ">li"
    );

    listElms.forEach((li) => {
      console.log("li=", li);
      li.insertAdjacentHTML(
        "afterbegin",
        `<input type="radio" id="html" name="fav_language" value="HTML">`
      );
    });

    this.poller.poll([selectors.observerTargetNode], () => {});
  };
}
