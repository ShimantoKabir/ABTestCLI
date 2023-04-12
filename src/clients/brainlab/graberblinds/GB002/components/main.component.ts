import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { AboutProductDesktopComponent } from "./about-product-desktop.component";
import { AboutProductMobileComponent } from "./about-product-mobile.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const apdCom = new AboutProductDesktopComponent();
    apdCom.render();
    const apmCom = new AboutProductMobileComponent();
    apmCom.render();
  };
}
