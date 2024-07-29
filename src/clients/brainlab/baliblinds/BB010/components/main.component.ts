import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    window.location.pathname === "/" && this.applyModification();
  };

  applyModification = () => {
    const dottedLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.dottedLink);

    if (dottedLinks.length === 0 || dottedLinks === null) {
      return;
    }

    dottedLinks.forEach((link: HTMLAnchorElement) => {
      const span: null | HTMLSpanElement = link.querySelector("span");
      if (span && span.textContent) {
        link.textContent = "";
        link.textContent = span.textContent;
        let words: string[] = span.textContent.split(" ");
        link.classList.add(words[1].toLowerCase());
      }
    });
  };
}
