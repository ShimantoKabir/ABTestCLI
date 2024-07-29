import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isHeadlineFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.isHeadlineFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const headline: null | HTMLSpanElement =
          document.querySelector("span.device-name");

        if (!this.isHeadlineFound && headline) {
          this.applyModification(headline);
          this.isHeadlineFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  applyModification = (headline: HTMLSpanElement) => {
    const subText: null | HTMLParagraphElement =
      document.querySelector("p.sub-text");

    if (subText) {
      return;
    }

    headline.insertAdjacentHTML(
      "afterend",
      `<p class="sub-text" >No new device payments. no activation fee. no contracts.</p>`
    );
  };
}
