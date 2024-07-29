import {
  closeIcon,
  getStartedLink,
  selectors,
  triggerEvent,
} from "../common/asset";

export class ToastComponent {
  private toast: null | HTMLDivElement = null;

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="toast-component" >
        <div class="component-wrap" >
          <p>Ready to send big files?</p>
          <a class="start-btn" href="${getStartedLink}" >Get Started</a>
          <div class="close-icon" >
            ${closeIcon}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    const isCookieExist: string | undefined = this.getCookie("wt_privacy");

    const toastAppearanceClass: string = isCookieExist ? "toast-show" : "";

    body.insertAdjacentHTML("beforeend", this.getHtml());

    this.toast = document.querySelector("div.toast-component");

    !isCookieExist && this.addCookieSectionListener();

    this.addToastListener();

    setTimeout(() => {
      this.toast && this.toast.classList.add(toastAppearanceClass);
    }, 500);
  };

  addToastListener = () => {
    const startBtn: null | HTMLAnchorElement =
      document.querySelector("a.start-btn");

    const closeSvgBtn: null | HTMLAnchorElement =
      document.querySelector("div.close-icon");

    if (!startBtn || !closeSvgBtn) {
      return;
    }

    closeSvgBtn.addEventListener("click", () => {
      this.toast && this.toast.classList.remove("toast-show");
    });

    startBtn.addEventListener("click", () => {
      triggerEvent("get-started-click");
    });
  };

  getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts && parts.length > 1 && parts[1].split(";").length > 0) {
      return parts[1].split(";")[0];
    } else {
      return undefined;
    }
  };

  addCookieSectionListener = () => {
    const yesBtn: null | HTMLButtonElement = document.querySelector(
      selectors.cookieAcceptBtn
    );

    const noBtn: null | HTMLButtonElement = document.querySelector(
      selectors.cookieRejectBtn
    );

    console.log("YES or NO button finding.....!");

    if (!yesBtn || !noBtn) {
      setTimeout(() => {
        this.addCookieSectionListener();
      }, 250);
    }

    if (yesBtn && noBtn) {
      console.log("YES or NO button FOUND!");
    }

    yesBtn &&
      yesBtn.addEventListener("click", () => {
        this.toast && this.toast.classList.add("toast-show");
      });

    noBtn &&
      noBtn.addEventListener("click", () => {
        this.toast && this.toast.classList.add("toast-show");
      });
  };
}
