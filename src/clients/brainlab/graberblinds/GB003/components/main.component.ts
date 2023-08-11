import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { FirstSlideComponent } from "./firstslide.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const firstSlideComponent = new FirstSlideComponent();

    if (TestInfo.VARIATION.toString() === "1") {
      firstSlideComponent.renderV1();
    } else if (TestInfo.VARIATION.toString() === "2") {
      firstSlideComponent.renderV2();
    }
  };
}
