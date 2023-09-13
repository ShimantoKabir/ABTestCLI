import { TestInfo } from "../common/test.info";

export class BoxShadowComponent {
  static addBoxShadow = (stickyContainer: HTMLDivElement) => {
    if (TestInfo.VARIATION.toString() !== "1") {
      return;
    }

    const socialContactContainer: HTMLDivElement | null =
      document.querySelector("div.social-contact-container");

    if (!socialContactContainer) {
      return;
    }

    var observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.boundingClientRect.top === 0) {
            socialContactContainer.classList.add("test-box-shadow");
          } else {
            socialContactContainer.classList.remove("test-box-shadow");
          }
        });
      },
      { rootMargin: "-1px 0px 0px 0px", threshold: [0, 1] }
    );

    observer.observe(stickyContainer);
  };
}
