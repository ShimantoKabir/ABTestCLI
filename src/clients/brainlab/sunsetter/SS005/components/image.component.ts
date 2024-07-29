import { selectors, siteImages } from "../common/asset";

export class ImageComponent {
  private getImageItemHtml = (imageSource: string, index: number): string => {
    const hideClass: string = index === 0 ? "" : "hide";

    const htmlString: string = `<img class="site-image ${hideClass}" src="${imageSource}" >`;
    return htmlString.trim();
  };

  private getHtml = (): string => {
    const htmlString: string = siteImages
      .map((siteImage: string, index: number) =>
        this.getImageItemHtml(siteImage, index)
      )
      .join("\n");
    return htmlString.trim();
  };

  render = () => {
    const siteImage: null | HTMLDivElement = document.querySelector(
      selectors.cardImage
    );

    if (!siteImage) {
      return;
    }

    siteImage.firstElementChild && siteImage.firstElementChild.remove();

    siteImage.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
