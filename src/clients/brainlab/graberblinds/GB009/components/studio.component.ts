import { imgLink, selectors, triggerEvent } from "../common/asset";
import { StudioModel } from "../common/studio.mode";

export class StudioComponent {
  iteration: string = "2";

  private getHtml = (studio: StudioModel): string => {
    const htmlString: string = `
      <div class="studio-component round-${studio.round} iteration-${this.iteration}" >
        <div class="component-wrap" >
          <div class="text-content" >
            <div class="header" >
              <div class="sub-title" >
                <p>${studio.subTitle} ${studio.location}</p>
              </div>
              <div class="title" >
                <h2>${studio.title}</h2>
              </div>
            </div>
            <div class="description" >
              <p>${studio.description}</p>
            </div>
            <div class="studio-link" >
              <a href="${studio.link}" >${studio.linkText}</a>
            </div>
          </div>
          <div class="image-content" > 
            <img src="${imgLink}" alt="${studio.location}" >
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (studio: StudioModel) => {
    const position: InsertPosition =
      this.iteration === "1" ? "afterend" : "beforeend";

    const selector: string =
      this.iteration === "1" ? selectors.carousal : selectors.quality;

    const carousal: null | HTMLDivElement = document.querySelector(selector);

    if (!carousal) {
      return;
    }

    carousal.insertAdjacentHTML(position, this.getHtml(studio));

    this.addListener();
  };

  addListener = () => {
    const link: null | HTMLAnchorElement =
      document.querySelector("div.studio-link>a");

    if (!link) {
      return;
    }

    link.addEventListener("click", () => {
      triggerEvent("studio-link-click");
    });
  };
}
