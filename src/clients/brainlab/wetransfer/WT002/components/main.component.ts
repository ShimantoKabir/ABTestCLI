import { Initializer } from "../../../../../utilities/initializer";
import {
  loginLink,
  selectors,
  signUpLink,
  triggerEvent,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();
  isPageLoaded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getLoginLinkHtml = (): string => {
    const linkText: string =
      this.variation === "1"
        ? "Log In"
        : this.variation === "2"
        ? "Sign In"
        : "";
    const htmlString: string = `<a href="${loginLink}" class="login-link" >${linkText}</a>`;
    return htmlString.trim();
  };

  applyModification = () => {
    if (window.innerWidth > 1023) {
      return;
    }

    const toggleButton: null | HTMLButtonElement = document.querySelector(
      selectors.toggleButton
    );

    const headerWrapper: null | HTMLButtonElement = document.querySelector(
      selectors.headerWrapper
    );

    if (!headerWrapper || !toggleButton) {
      return;
    }

    toggleButton.classList.add("toggle-btn");
    headerWrapper.classList.add("header-wrapper");

    headerWrapper.insertAdjacentHTML("afterbegin", this.getLoginLinkHtml());

    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("toggle-btn");
    });

    this.addListener();
  };

  addListener = () => {
    const loginLink: null | HTMLButtonElement =
      document.querySelector("a.login-link");

    loginLink &&
      loginLink.addEventListener("click", () => {
        triggerEvent("login-link-click");
      });

    const singUpLink: null | HTMLButtonElement = document.querySelector(
      selectors.signUpLink
    );

    singUpLink && singUpLink.setAttribute("href", signUpLink);
  };

  init = (): void => {
    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        console.log("length=", target.innerHTML.length);

        if (target.innerHTML.length > 128500 && !this.isPageLoaded) {
          this.applyModification();
          console.log("Page loaded....!");
          this.isPageLoaded = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
