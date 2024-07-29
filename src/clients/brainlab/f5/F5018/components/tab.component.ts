import { selectors, tabActiveClasses, triggerMetrics } from "../common/asset";

export class TabComponent {
  extraTabClickCount: number = 0;

  private getHtml = (): string => {
    const htmlString: string = `
    <li role="tab" class="cmp-tabs__tab scroll_tab_last tab-extra">
      <div class="cmp-tabs__tab-content">
        <div class="cmp-tabs__title-wrap display-5">By Cloud Partners</div>
        <div class="cmp-tabs__border-placeholder tab-border">
          <span class="cmp-tabs__border-active"></span>
        </div>
      </div>
    </li>
    `;

    return htmlString.trim();
  };

  render = (callback: Function) => {
    const tab: null | HTMLDialogElement = document.querySelector(selectors.tab);

    if (!tab) {
      return;
    }

    tab.insertAdjacentHTML("beforeend", this.getHtml());

    const tabExtra: null | HTMLLIElement =
      document.querySelector("li.tab-extra");

    const tabList: null | NodeListOf<HTMLLIElement> = document.querySelectorAll(
      selectors.tab + ">li"
    );

    tabExtra &&
      tabExtra.addEventListener("click", () => {
        this.extraTabClickCount++;
        this.clearActiveExceptExtra(tabList);
        callback();

        this.extraTabClickCount > 1 && triggerMetrics("partner-tab-click");
      });

    // tabExtra && tabExtra.click();
  };

  clearActiveExceptExtra = (tabList: NodeListOf<HTMLLIElement>) => {
    tabList.forEach((tab: HTMLLIElement) => {
      if (tab.classList.contains("tab-extra")) {
        tabActiveClasses.forEach((className) => {
          tab.classList.add(className);
        });
      } else {
        tabActiveClasses.forEach((className) => {
          tab.classList.remove(className);
        });
      }
    });
  };
}
