import { TestInfo } from "../common/test.info";

export class Fixer {
  static headerSelector: string = "header.header";
  static zIndex: string = TestInfo.ID + "__z-index";
  static tabSectionSelector: string = "section.tabs-section";
  static menuButtonSelector: string = "button.nav-mobile";

  static fixStickyHeaderConflictWithMenu = () => {
    const headerElm = document.querySelector<HTMLElement>(this.headerSelector);
    const tabSectionElm = document.querySelector<HTMLElement>(
      this.tabSectionSelector
    );
    const menuButtonElm = document.querySelector<HTMLButtonElement>(
      this.menuButtonSelector
    );

    if (headerElm && tabSectionElm && menuButtonElm) {
      headerElm.addEventListener("mouseover", () => {
        this.isOkToAdd() && tabSectionElm.classList.add(this.zIndex);
      });

      headerElm.addEventListener("mouseleave", () => {
        tabSectionElm.classList.remove(this.zIndex);
      });

      menuButtonElm.addEventListener("click", () => {
        if (tabSectionElm.classList.contains(this.zIndex)) {
          tabSectionElm.classList.add(this.zIndex);
        } else {
          tabSectionElm.classList.remove(this.zIndex);
        }
      });
    }
  };

  static isOkToAdd = (): boolean => {
    const top: number | undefined = document
      .querySelector(this.tabSectionSelector)
      ?.getBoundingClientRect().top;

    if (typeof top === "number") {
      return top > 100;
    } else {
      return false;
    }
  };
}
