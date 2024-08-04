import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { PlanComponent } from "./plan.component";
import { SlideComponent } from "./slide.component";

export class MainComponent {
  slideComponent: SlideComponent = new SlideComponent();
  planComponent: PlanComponent = new PlanComponent();
  isSliderFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const prevSibling: Element | null = mutationList[index]
          .previousSibling as Element | null;

        if (
          prevSibling &&
          prevSibling.classList &&
          prevSibling.classList.contains("slick-slider") &&
          prevSibling.classList.contains("slick-initialized") &&
          !this.isSliderFound
        ) {
          this.applyModification();
          this.isSliderFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="main-component" >
        ${this.slideComponent.getHtml()}
        ${this.planComponent.getHtml()}
      </div>
    `;

    return htmlString.trim();
  };

  applyModification = () => {
    console.log("Modification applying....!");

    const carousalSection: null | HTMLDivElement = document.querySelector(
      selectors.carousalSection
    );

    if (!carousalSection) {
      return;
    }

    carousalSection.insertAdjacentHTML("beforebegin", this.getHtml());

    this.addListener();
  };

  addListener = () => {
    const shopPhoneLink: null | HTMLDivElement =
      document.querySelector("a.shop");

    if (!shopPhoneLink) {
      return;
    }

    shopPhoneLink.addEventListener("click", () => {
      triggerMetrics("shop-phone-link-click");
    });
  };
}
