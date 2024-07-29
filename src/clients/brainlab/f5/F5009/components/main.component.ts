import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
  privacyNoticeLink,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { ButtonComponent } from "./button.component";
import { ProgressComponent } from "./progress.component";

export class MainComponent {
  buttonComponent: ButtonComponent = new ButtonComponent();
  progressComponent: ProgressComponent = new ProgressComponent();
  isFormSubmitted: boolean = false;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const formTopDivisions: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.formTopDivisions);

    const formBottomDivisions: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.formBottomDivisions);

    if (!formTopDivisions || !formBottomDivisions) {
      return;
    }

    this.variation === "1" && this.playHideAndShow(formBottomDivisions, "hide");

    this.variation === "1" && this.progressComponent.render();

    this.variation === "1" &&
      this.buttonComponent.render(formTopDivisions, () => {
        this.playHideAndShow(formTopDivisions, "hide");
        this.playHideAndShow(formBottomDivisions, "show");
        this.progressComponent.makeProgressFull();
      });

    this.variation === "1" && this.changeFormText();

    this.addGoals();
  };

  playHideAndShow = (
    divisions: NodeListOf<HTMLDivElement>,
    operation: string
  ) => {
    operation === "hide" &&
      divisions.forEach((div: HTMLDivElement) => {
        div.classList.add("hide");
      });

    operation === "show" &&
      divisions.forEach((div: HTMLDivElement) => {
        div.classList.remove("hide");
      });
  };

  changeFormText = () => {
    const formText: null | HTMLParagraphElement = document.querySelector(
      selectors.formText
    );

    if (!formText) {
      return;
    }

    formText.textContent = "";

    formText.insertAdjacentHTML(
      "beforeend",
      `The information you provide will be treated in accordance with the <a href="${privacyNoticeLink}" >F5 Privacy Notice</a>. Opt-out at anytime.`
    );
  };

  addGoals = () => {
    const testObserver = new TestObserver(selectors.success);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        if (target.classList.contains("show") && !this.isFormSubmitted) {
          triggerMetrics(mboxNames.formSubmitted);
          this.isFormSubmitted = true;
        }
      }
    };
    testObserver.observe(callback);

    const form: null | HTMLFormElement = document.querySelector(selectors.form);

    form &&
      form.addEventListener("click", () => {
        triggerMetrics(mboxNames.anywhereClickInForm);
      });
  };
}
