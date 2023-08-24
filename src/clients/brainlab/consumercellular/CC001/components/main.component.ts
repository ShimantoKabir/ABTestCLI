import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LineComponent } from "./line.component";
import { PlanComponent } from "./plan.component";
import { RedirectButtonComponent } from "./redirect-button.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

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

    const planContainer: null | HTMLDivElement = document.querySelector(
      selectors.planContainer
    );

    if (planContainer) {
      planContainer.insertAdjacentHTML(
        "afterbegin",
        (planContainer.firstChild as Element).outerHTML
      );

      const planInternetTexts: null | NodeListOf<HTMLParagraphElement> =
        document.querySelectorAll("p.css-13qu9nj");

      if (planInternetTexts && planInternetTexts.length > 3) {
        planInternetTexts[1].textContent = "25";
      }
    }

    PlanComponent.addPLanClickEvent();

    const redirectButtonComponent = new RedirectButtonComponent();
    redirectButtonComponent.render();
    redirectButtonComponent.addRedirectEvent();
  };
}
