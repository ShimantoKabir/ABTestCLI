import { Initializer } from "../../../../../utilities/initializer";
import { eventNames, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  timer!: NodeJS.Timeout;
  observedMutations: MutationRecord[] = [];
  isModificationApplied: boolean = false;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  trackEvent = (eventName: string) => {
    //@ts-ignore
    window["optimizely"] = window["optimizely"] || [];
    //@ts-ignore
    window["optimizely"].push({
      type: "event",
      eventName: eventName,
    });
    console.log("event-name=", eventName);
  };

  addViewDetailButtonListener = (wrapper: HTMLDivElement) => {
    const button: null | HTMLButtonElement =
      wrapper.querySelector("span.gallery-link");
    const link: null | HTMLAnchorElement = wrapper.querySelector("a");

    button &&
      button.addEventListener("click", () => {
        setTimeout(() => {
          const modal: null | HTMLDivElement = wrapper.querySelector(
            "div.modal>div.container>div.modal-dialog>div.modal-content"
          );

          this.variation === "1" &&
            link &&
            modal &&
            this.addBottomLightboxLink(link.getAttribute("href"), modal);

          this.trackEvent(eventNames.visualizerIconClick);
        }, 250);
      });

    link &&
      link.addEventListener("click", () => {
        this.trackEvent(eventNames.cardVisualizerLinkClick);
      });
  };

  addBottomLightboxLink = (link: string | null, modal: HTMLDivElement) => {
    link &&
      modal.insertAdjacentHTML(
        "beforeend",
        `<div class="lightbox" ><a class="lightbox-link" href="${link}" >View in Visualizer</a></div>`
      );

    const lightboxLink: null | HTMLAnchorElement =
      document.querySelector("a.lightbox-link");

    lightboxLink &&
      lightboxLink.addEventListener("click", () => {
        this.trackEvent(eventNames.modalVisualizerLinkClick);
      });
  };

  handleLastCallback = () => {
    if (!this.isModificationApplied) {
      this.applyModification();
      this.isModificationApplied = true;
    }

    this.observedMutations.length = 0;
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.swatchContainer);
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        this.observedMutations = [...mutationList];

        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.handleLastCallback();
        }, 200);
      }
    };
    testObserver.observe(callback);
  };

  applyModification = () => {
    const imageWrappers: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.imageWrappers);

    const menuItems: null | NodeListOf<HTMLLIElement> =
      document.querySelectorAll(selectors.menuItems);

    if (!imageWrappers || imageWrappers.length === 0) {
      return;
    }

    imageWrappers.forEach((wrapper: HTMLDivElement) => {
      this.addViewDetailButtonListener(wrapper);
    });

    if (!menuItems || menuItems.length === 0) {
      return;
    }

    menuItems.forEach((menuItem: HTMLLIElement) => {
      menuItem.addEventListener("click", () => {
        this.trackEvent(eventNames.filterSwatchClick);
        this.isModificationApplied = false;
      });
    });
  };
}
