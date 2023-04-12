import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { HeroApplyComponent } from "./hero-apply.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const heroApplyComponent = new HeroApplyComponent();
    heroApplyComponent.render();
  };
}
