import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  visualizationLinks: string[] = [];
  isObserved: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addViewDetailButtonListener = (wrapper: HTMLDivElement) => {
    const button: null | HTMLButtonElement = wrapper.querySelector("button");
    const link: null | HTMLAnchorElement = wrapper.querySelector("a");

    button &&
      button.addEventListener("click", () => {
        setTimeout(() => {
          const modal: null | HTMLDivElement = wrapper.querySelector(
            "div.modal>div.container>div.modal-dialog"
          );
          link &&
            modal &&
            this.addBottomLightboxLink(link.getAttribute("href"), modal);
        }, 250);
      });
  };

  addBottomLightboxLink = (link: string | null, modal: HTMLDivElement) => {
    link &&
      modal.insertAdjacentHTML(
        "beforeend",
        `<div class="lightbox" ><a href="${link}" >View in Visualizer</a></div>`
      );
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.swatchContainer);
    const callback = (mutationList: MutationRecord[]) => {
      console.log("HI");
      for (let index = 0; index < mutationList.length; index++) {
        const mutationRecord: MutationRecord = mutationList[index];
        const target: Element = mutationRecord.target as Element;
        const previousSibling = mutationRecord.previousSibling as Element;

        console.log("target=", target.classList);
      }
    };
    testObserver.observe(callback);
  };

  startOperation = () => {
    const imageWrappers: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.imageWrappers);

    if (!imageWrappers || imageWrappers.length === 0) {
      return;
    }

    imageWrappers.forEach((wrapper: HTMLDivElement) => {
      this.addViewDetailButtonListener(wrapper);
    });
  };
}
