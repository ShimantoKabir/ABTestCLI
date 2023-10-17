import { formInfos, mktoForms2, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Icon } from "../models/icon";
import { IconStepComponent } from "./icon-step.component";
import { ServiceComponent } from "./service.component";
import { SuccessComponent } from "./success.component";

export class FormComponent {
  successComponent: SuccessComponent = new SuccessComponent();
  serviceComponent: ServiceComponent = new ServiceComponent();

  getHtml = (): string => {
    const htmlString: string = `
        <div class="form-component-container" >
            ${this.successComponent.getHtml()}
            <div class="form-component" >
                <div class="form-header" >
                    <div class="form-title" >
                        <h3>${formInfos.title}</h3>
                    </div>
                    <div class="form-close-icon" >
                        ${formInfos.closeIcon}
                    </div>
                </div>
                <div class="form-main" >
                    <div class="form-main-left">
                        <div class="form-icon-step" >
                        ${formInfos.icons
                          .filter((icon: Icon) => icon.step === 1)
                          .map((icon: Icon) => IconStepComponent.render(icon))
                          .join("\n")}
                        </div>
                        <div class="form-icon-step" >
                        ${formInfos.icons
                          .filter((icon: Icon) => icon.step === 2)
                          .map((icon: Icon) => IconStepComponent.render(icon))
                          .join("\n")}
                        </div>
                    </div>
                    <div class="form-main-right c28" >
                        <form id="mktoForm_${mktoForms2.formId}"></form>
                    </div>
                </div>
            </div>
        </div>
    `;
    return htmlString;
  };

  render = () => {
    if (TestInfo.VARIATION.toString() === "2") {
      const complexSection: null | HTMLDivElement = document.querySelector(
        selectors.complexSection
      );

      if (!complexSection) {
        return;
      }

      complexSection.insertAdjacentHTML("afterend", this.getHtml());
      return;
    }

    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("beforeend", this.getHtml());
  };

  showSuccessMessage = () => {
    const formComponentContainer: null | HTMLDivElement | undefined =
      this.serviceComponent.manageModalClose(selectors.successCloseIcon);

    if (!formComponentContainer) {
      return;
    }

    formComponentContainer.classList.add("success");
  };
}
