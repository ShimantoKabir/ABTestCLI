import { Initializer } from "../../../../../utilities/initializer";
import { menus } from "../common/asset";
import { TestIntersectionObserver } from "../common/test.Intersection.observer";
import { TestInfo } from "../common/test.info";
import { MenuComponent } from "./menu.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    menus.forEach((menu) => {
      const target = document.querySelector(menu.selector);
      const observer = new TestIntersectionObserver();
      observer.observe(target as Element, menu.apiName);
    });

    menus.forEach((menu) => {
      document.querySelector(menu.selector)?.setAttribute("id", menu.apiName);
    });

    const menuComponent = new MenuComponent();
    menuComponent.render();
  };
}
