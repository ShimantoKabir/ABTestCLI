import { bannerText } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class BannerTextComponent {
  static render = (): string => {
    return `<div class="${TestInfo.ID}__banner-text-container" ><p>${bannerText}</p></div>`;
  };
}
