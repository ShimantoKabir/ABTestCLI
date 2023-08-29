import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LineComponent } from "./line.component";
import { PhoneNumberChangerComponent } from "./phone-number-changer.component";
import { PlanComponent } from "./plan.component";
import { RedirectButtonComponent } from "./redirect-button.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const phoneNumberChangerComponent = new PhoneNumberChangerComponent();
    phoneNumberChangerComponent.changeSemPhoneNumber();

    const existPlanSection: null | Element = document.querySelector(
      selectors.existPlanSection
    );

    const chakraHeading: null | HTMLHeadingElement = document.querySelector(
      selectors.chakraHeading
    );

    if (existPlanSection && chakraHeading) {
      chakraHeading.insertAdjacentHTML(
        "afterend",
        "<h3 class='line-heading' >How many phone lines would you like?<h3>"
      );
      const lineComponent = new LineComponent();
      existPlanSection.insertAdjacentHTML(
        "beforebegin",
        lineComponent.render()
      );

      lineComponent.addBulletClickEvent();
    }

    PlanComponent.addPLanClickEvent();

    const redirectButtonComponent = new RedirectButtonComponent();
    redirectButtonComponent.render();
    redirectButtonComponent.addRedirectEvent();
  };
}
