import { Initializer } from "../../../../../utilities/initializer";
import { Poller } from "../../../../../utilities/poller";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { SwatchObserver } from "../observer/swatch.observer";

export class MainComponent {
  private poller = new Poller();
  private targetClassName: string = "category-product-list";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.addRadioButton();

    this.poller.poll([selectors.observerTargetNode], () => {
      const cartObserver = new SwatchObserver(selectors.observerTargetNode);
      const callback = (mutationList: any, observer: any) => {
        for (const mutation of mutationList) {
          if (
            mutation.type === "childList" &&
            mutation.target.classList.contains(this.targetClassName)
          ) {
            this.addRadioButton();
          }
        }
      };
      cartObserver.observe(callback);
    });
  };

  addRadioButton = () => {
    const listElms = document.querySelectorAll<Element>(
      selectors.listSelector + ">li"
    );

    listElms.forEach((li: Element, index: number) => {
      const link = document.querySelector(
        `ul.category-product-list>li:nth-child(${index})>a`
      );
      const href = link?.getAttribute("href");
      console.log("href=", href);
      const input = document.querySelector(
        `ul.category-product-list>li:nth-child(${index})>input`
      );

      input?.addEventListener("click", () => {
        if (href) {
          window.location.href = href;
        }
      });

      if (li.classList.contains("active")) {
        li.insertAdjacentHTML("afterbegin", `<input type="radio" checked>`);
      } else {
        li.insertAdjacentHTML("afterbegin", `<input type="radio"  >`);
      }
    });
  };
}
