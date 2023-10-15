import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, pageData, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { TileComponent } from "./tile.component";

export class MainComponent {
  isNewTileAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addControlGoalListener = (selector: string) => {
    const elements: null | NodeListOf<Element> =
      document.querySelectorAll(selector);

    if (!elements || elements.length === 0) {
      return;
    }

    elements.forEach((element: Element) => {
      element.addEventListener("click", () => {
        console.log("shop-phone-and-device=", mboxNames.shopPhone);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.shopPhone });
      });
    });
  };

  addControlGoal = () => {
    this.addControlGoalListener(selectors.tileFooterLink);
  };

  addNewTile = () => {
    if (TestInfo.VARIATION.toString() === "1") {
      const tile = new TileComponent();
      tile.render();
    } else {
      this.addControlGoal();
    }
  };

  init = (): void => {
    LocationObserver.listen(() => {
      this.isNewTileAdded = false;
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let i = 0; i < mutationList.length; i++) {
        const mutationRecord: MutationRecord = mutationList[i];
        const target: Element = mutationRecord.target as Element;

        if (
          target &&
          target.classList &&
          target.classList.contains(
            pageData.shoppingPage.planSummaryTargetClassList[0]
          ) &&
          target.classList.contains(
            pageData.shoppingPage.planSummaryTargetClassList[1]
          ) &&
          !this.isNewTileAdded
        ) {
          this.addNewTile();
          this.isNewTileAdded = true;
          break;
        }

        if (
          target &&
          target.id &&
          target.id === pageData.shoppingPage.mobilePostTargetId &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName ===
            pageData.shoppingPage.mobilePostAttributeName &&
          !this.isNewTileAdded
        ) {
          this.addNewTile();
          this.isNewTileAdded = true;
          break;
        }
      }
    };

    testObserver.observe(callback);
  };
}
