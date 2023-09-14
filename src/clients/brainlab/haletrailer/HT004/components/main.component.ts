import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { BoxShadowComponent } from "./box-shadow.component";
import { SocialComponent } from "./social.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const stickyContainer: HTMLDivElement | null = document.querySelector(
      selectors.stickyContainer
    );

    if (!stickyContainer) {
      return;
    }

    const socialComponent = new SocialComponent();
    socialComponent.render(stickyContainer);

    BoxShadowComponent.addBoxShadow();
  };
}
