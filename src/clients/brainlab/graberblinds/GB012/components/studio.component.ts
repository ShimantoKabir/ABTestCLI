import { imgLink, selectors, triggerEvent } from "../common/asset";
import { StudioModel } from "../common/studio.mode";

export class StudioComponent {
  private getHtml = (studio: StudioModel): string => {
    const htmlString: string = `
      <div class="studio-component round-${studio.round}" >
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
    const dealerLocator: null | HTMLDivElement = document.querySelector(
      selectors.dealerLocator
    );

    if (!dealerLocator) {
      return;
    }

    dealerLocator.insertAdjacentHTML("beforebegin", this.getHtml(studio));

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
