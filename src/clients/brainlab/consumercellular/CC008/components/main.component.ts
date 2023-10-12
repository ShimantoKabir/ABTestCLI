import { Initializer } from "../../../../../utilities/initializer";
import { pageData, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { TileComponent } from "./tile.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addNewTile = () => {
    const tile = new TileComponent();
    tile.render();
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let i = 0; i < mutationList.length; i++) {
        const mutationRecord: MutationRecord = mutationList[i];
        //console.log("mutationRecord=", mutationRecord);

        const target: Element = mutationRecord.target as Element;
        const perviousSibling: Element =
          mutationRecord.previousSibling as Element;

        if (
          target &&
          target.classList &&
          target.classList.contains(
            pageData.shoppingPage.planSummaryTargetClassList[0]
          ) &&
          target.classList.contains(
            pageData.shoppingPage.planSummaryTargetClassList[1]
          )
        ) {
          this.addNewTile();
          break;
        }

        if (
          target &&
          target.id &&
          target.id === pageData.shoppingPage.mobilePostTargetId &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName ===
            pageData.shoppingPage.mobilePostAttributeName
        ) {
          this.addNewTile();
          break;
        }
      }
    };

    testObserver.observe(callback);
  };
}
