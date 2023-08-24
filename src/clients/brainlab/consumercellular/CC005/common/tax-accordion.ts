export class TaxAccordion {
  private tabRootSelector: string =
    "div.submit-section div.hide-phone-up.base-due-today-mobile button";

  changeIcons = (icon: Element) => {
    if (icon.classList.contains("fa-angle-right")) {
      icon.classList.remove("fa-angle-right");
      icon.classList.add("fa-angle-down");
    } else {
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-right");
    }
  };

  addListener = () => {
    const tabButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(this.tabRootSelector);

    if (tabButtons && tabButtons.length > 0) {
      tabButtons.forEach((button: HTMLButtonElement) => {
        const panel: null | Element = button.nextElementSibling;
        if (panel) {
          panel.removeAttribute("style");
          panel.classList.add("hide-component");

          button.addEventListener("click", () => {
            button.parentElement?.classList.toggle("accordion-item--expanded");
            panel.classList.toggle("hide-component");
            const label = button.firstChild as HTMLSpanElement;

            if (
              label.firstChild &&
              label.firstChild.textContent &&
              label.firstChild.textContent.length > 0
            ) {
              this.changeIcons(label.lastChild as Element);
            } else {
              this.changeIcons(label.firstChild as Element);
            }
          });
        }
      });
    }
  };
}
