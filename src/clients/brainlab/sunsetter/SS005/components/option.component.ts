import {
  checkSvgIcon,
  selectors,
  triggerEvent,
  uncheckSvgIcon,
} from "../common/asset";

export class OptionComponent {
  defaultCheckboxLabels: null | NodeListOf<HTMLHeadingElement> = null;
  targetElement: null | HTMLLegendElement | HTMLDivElement = null;

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="option-component" >
        <h3 class="my-2">I'm interested in:</h3>
        <div class="component-wrap" >
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >AWNINGS</div>
          </div>
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >RETRACTABLE SHADES</div>
          </div>
          <div class="checkbox unchecked" >
            <div class="checked-icon" >${checkSvgIcon}</div>
            <div class="unchecked-icon" >${uncheckSvgIcon}</div>
            <div class="text" >EXTERIOR SHADES</div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (defaultCheckboxLabels: null | NodeListOf<HTMLHeadingElement>) => {
    this.defaultCheckboxLabels = defaultCheckboxLabels;

    const legend: null | HTMLLegendElement = document.querySelector(
      selectors.legend
    );

    const error: null | HTMLDivElement = document.querySelector(
      selectors.error
    );

    this.targetElement = error ? error : legend;

    if (!this.targetElement) {
      return;
    }

    this.targetElement.nextElementSibling &&
      this.targetElement.nextElementSibling.classList.add("vanish");

    this.targetElement.insertAdjacentHTML("afterend", this.getHtml());

    this.active();
  };

  active = () => {
    const checkboxes: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.checkbox");

    if (!checkboxes || checkboxes.length === 0) {
      return;
    }

    const siteImages: null | NodeListOf<HTMLImageElement> =
      document.querySelectorAll("img.site-image");

    console.log("site-image=", siteImages);

    checkboxes.forEach((checkbox: HTMLDivElement, index: number) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.add("checked");
        triggerEvent("checkbox-option-clicked");
        this.defaultCheckboxLabels && this.defaultCheckboxLabels[index].click();
        this.uncheckExceptClicked(checkboxes, index);
        siteImages &&
          siteImages.length > 0 &&
          this.hideAndShowSiteImage(index, siteImages);
      });
    });
  };

  hideAndShowSiteImage = (
    index: number,
    siteImages: NodeListOf<HTMLImageElement>
  ) => {
    siteImages.forEach((image: HTMLImageElement, imgIndex: number) => {
      image.classList.add("hide");
    });

    siteImages[index].classList.remove("hide");
  };

  uncheckExceptClicked = (
    checkboxes: NodeListOf<HTMLDivElement>,
    checkedIndex: number
  ) => {
    checkboxes.forEach((checkbox: HTMLDivElement, index: number) => {
      if (index !== checkedIndex) {
        checkbox.classList.remove("checked");
      }
    });
  };
}
