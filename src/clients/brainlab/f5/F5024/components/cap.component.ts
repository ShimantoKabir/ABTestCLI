import {
  capImageUrl,
  closeIconSvg,
  formInfo,
  selectors,
} from "../common/asset";
import { HeroFormComponent } from "./hero-form.component";

export class CapComponent {
  heroFormComponent: HeroFormComponent = new HeroFormComponent();

  getHtml = () => {
    const htmlString: string = `
      <div class="cap-component hide" >
        <div class="component-wrap" >
          <div class="wrap-container" >
            <div class="cap-left" >
              <div class="poster" >
                <div class="title" >
                  <h3>Discover Essential API Security Strategies</h3>
                </div>
                <div class="description" >
                  <p>Learn how to protect your APIs from evolving threats with our comprehensive guide.</p>
                </div>
                <div class="image" >
                  <img src="${capImageUrl}" >
                </div>
              </div>
            </div>
            <div class="cap-right" >
              ${this.heroFormComponent.getHtml(
                "cap-form-component",
                formInfo.cap
              )}
            </div>
          </div>
          <div class="close-icon" >
            ${closeIconSvg}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    document.body.insertAdjacentHTML("afterbegin", this.getHtml());
    this.config();
  };

  config = () => {
    const closeIcon: null | HTMLDivElement =
      document.querySelector("div.close-icon");
    const capComponent: null | HTMLDivElement =
      document.querySelector("div.cap-component");

    if (!closeIcon || !capComponent) {
      return;
    }

    closeIcon.addEventListener("click", () => {
      capComponent.classList.add("hide");
    });
  };

  configForm = () => {
    const emailAndForm: null | HTMLDivElement = document.querySelector(
      selectors.capFromNthRow + "(4)"
    );

    const job: null | HTMLDivElement = document.querySelector(
      selectors.capFromNthRow + "(5)"
    );

    const companyAndLocation: null | HTMLDivElement = document.querySelector(
      selectors.capFromNthRow + "(6)"
    );

    emailAndForm && emailAndForm.classList.add("row-to-col");
    job && job.classList.add("hide");
    companyAndLocation && companyAndLocation.classList.add("hide");

    this.configFormActions();
  };

  configFormActions = () => {
    const nextButton: HTMLButtonElement | null =
      document.querySelector("button.next.cap");
    const backButton: HTMLButtonElement | null =
      document.querySelector("button.back.cap");
    const submitButton: HTMLButtonElement | null =
      document.querySelector("button.submit.cap");
    const formProgressContainer: null | HTMLDivElement = document.querySelector(
      "div.form-progress-container.cap"
    );
    const formActions: null | HTMLDivElement = document.querySelector(
      "div.from-actions.cap"
    );

    const originalSubmitButton: null | HTMLButtonElement =
      document.querySelector("form.cap button.mktoButton");

    console.log("cap-original=", originalSubmitButton);

    const form: null | HTMLFormElement = document.querySelector(
      "div.form-container>form.cap"
    );

    if (
      !nextButton ||
      !backButton ||
      !submitButton ||
      !formActions ||
      !formProgressContainer ||
      !originalSubmitButton ||
      !form
    ) {
      return;
    }

    nextButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.capNameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length === 0) {
          formProgressContainer.classList.add("next");
          formActions.classList.add("next");
          form.classList.add("next");
        }
      }, 100);
    });

    backButton.addEventListener("click", () => {
      formProgressContainer.classList.remove("next");
      formActions.classList.remove("next");
      form.classList.remove("next");
    });

    submitButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.capNameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length !== 0) {
          formProgressContainer.classList.remove("next");
          formActions.classList.remove("next");
          form.classList.remove("next");
        }
      }, 100);
    });
  };
}
