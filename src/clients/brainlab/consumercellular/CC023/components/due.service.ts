import { selectors } from "../common/asset";
import { Store } from "../common/store";
import { TestObserver } from "../observer/test.observer";

export class DueService {
  dueTodayWrapper: HTMLDivElement | null = null;

  reRender = (store: Store) => {
    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        const dtw: HTMLDivElement | null = target.querySelector(
          selectors.dueTodayWrapper
        );

        const reviewOrderButton: HTMLDivElement | null = target.querySelector(
          selectors.reviewOrderButton
        );

        const navHeader: HTMLDivElement | null = target.querySelector(
          selectors.navHeader
        );

        const spacer: HTMLDivElement | null = target.querySelector(
          selectors.spacer
        );

        if (reviewOrderButton && store.isComponentMoved === false && dtw) {
          reviewOrderButton.insertAdjacentElement("beforebegin", dtw);
          this.dueTodayWrapper = dtw;
          store.isComponentMoved = true;
          store.isModificationApplied = true;
          spacer && spacer.classList.remove("show");
          console.log("Component moved...!");
        }

        if (
          window.location.pathname !== "/shopping" &&
          navHeader &&
          navHeader.children.length === 2 &&
          this.dueTodayWrapper &&
          store.isComponentMoved === false
        ) {
          navHeader.insertAdjacentElement("beforeend", this.dueTodayWrapper);
          store.isComponentMoved = true;
          store.isModificationApplied = true;
          spacer && spacer.classList.add("show");
          console.log("Component moved...!");
        }

        if (
          window.location.pathname === "/shopping/choose/plan" &&
          store.isModificationApplied === true
        ) {
          console.log("Plan location reload...!");
          window.location.reload();
        }

        const deiceSummaryHeader: HTMLDivElement | null = target.querySelector(
          selectors.deiceSummaryHeader
        );

        const addPlan: HTMLDivElement | null = target.querySelector(
          selectors.addPlan
        );

        if (
          addPlan &&
          deiceSummaryHeader &&
          deiceSummaryHeader.children.length === 2
        ) {
          console.log("Shopping location reload...!");
          window.location.reload();
        }
      }
    };

    testObserver.observe(callback);
  };
}
