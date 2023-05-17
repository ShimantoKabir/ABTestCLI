import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const clonedFaq = document.querySelector(selectors.faq)?.cloneNode(true);
    document.querySelector(selectors.faq)?.remove();

    if (clonedFaq) {
      document
        .querySelector(selectors.quoteBlock)
        ?.insertAdjacentElement("afterend", clonedFaq as Element);
    }

    const buttons = document.querySelectorAll(selectors.expandBtn);

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const status = btn.children[1];
        status.classList.toggle("active");

        const panel = btn.nextElementSibling;
        panel?.classList.toggle(TestInfo.ID + "__active-panel");
      });
    });
  };
}
