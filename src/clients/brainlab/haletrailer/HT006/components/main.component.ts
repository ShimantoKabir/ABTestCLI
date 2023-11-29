import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Trailer } from "../models/trailer";
import { MainService } from "../services/main.service";
import { AccordionComponent } from "./accordion.component";

export class MainComponent {
  mainService: MainService = new MainService();
  accordionComponent: AccordionComponent = new AccordionComponent();
  trailers: Trailer[] = [];
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const trailers: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.trailers);

    if (!trailers || trailers.length === 0) {
      return;
    }

    this.variation === "1" &&
      trailers[0].parentElement &&
      trailers[0].parentElement.classList.add("hide");

    this.trailers = this.mainService.collectData(trailers);

    this.variation === "1" && this.accordionComponent.render(this.trailers);
  };
}
