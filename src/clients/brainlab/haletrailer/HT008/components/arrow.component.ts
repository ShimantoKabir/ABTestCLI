import { arrow, selectors } from "../common/asset";

export class ArrowComponent {
  componentClassName: string = "arrow-component";

  getHtml = (): string => {
    const htmlString: string = `
      <div class="${this.componentClassName}">
        <div class="arrow-svg" >
          ${arrow}
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  reactive = () => {
    const trailerWraps: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.trailerWrap);

    if (!trailerWraps || trailerWraps.length === 0) {
      return;
    }

    trailerWraps.forEach((trailerWrap: HTMLDivElement) => {
      const location: null | HTMLDivElement = trailerWrap.querySelector(
        "div.trailer-location"
      );

      location && location.classList.add("trailer-opacity");

      const arrow: null | HTMLDivElement =
        trailerWrap.querySelector("div.arrow-svg");

      const status: null | HTMLDivElement =
        trailerWrap.querySelector("div.trailer-status");

      const year: null | HTMLDivElement =
        trailerWrap.querySelector("div.year-info");

      const width: null | HTMLDivElement =
        trailerWrap.querySelector("div.width-info");

      arrow &&
        arrow.addEventListener("click", () => {
          arrow.parentElement && arrow.parentElement.classList.toggle("down");
          status && status.classList.toggle("hide");
          year && year.classList.toggle("hide");
          width && width.classList.toggle("hide");
          location && location.classList.toggle("trailer-opacity");
        });

      trailerWrap.firstElementChild &&
        trailerWrap.firstElementChild.classList.add("trailer-bg-color");
      trailerWrap.lastElementChild &&
        trailerWrap.lastElementChild.classList.add("trailer-bg-color");
    });
  };
}
