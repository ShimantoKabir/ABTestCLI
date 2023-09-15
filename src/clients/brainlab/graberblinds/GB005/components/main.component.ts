import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const menus: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.menu);

    if (menus) {
      menus.forEach((menu: HTMLAnchorElement) => {
        const href: string | null = menu.getAttribute("href");

        if (href && href.indexOf("layered-shades") !== -1) {
          if (TestInfo.VARIATION.toString() === "1") {
            menu.textContent = "Layered | Zebra Shades";
          } else {
            menu.textContent = "Layered Zebra Shades";
          }
        } else {
          if (TestInfo.VARIATION.toString() === "1") {
            menu.textContent = "Natural | Woven Shades";
          } else {
            menu.textContent = "Natural Woven Shades";
          }
        }
      });
    }
  };
}
