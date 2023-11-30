import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { Service } from "../models/Service";
import { MainService } from "../services/main.service";
import { AccordionComponent } from "./accordion.component";

export class MainComponent {
  mainService: MainService = new MainService();
  services: Service[] = [];
  accordionComponent: AccordionComponent = new AccordionComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.services = this.mainService.collectData();
    this.accordionComponent.render(this.services);
  };
}
