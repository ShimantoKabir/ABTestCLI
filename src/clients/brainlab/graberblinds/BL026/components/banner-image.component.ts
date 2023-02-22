import { bannerImageUrl } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class BannerImageComponent {
  render = (): string => {
    const htmlStr: string = `<div class="${TestInfo.ID}__hero" >
      <div class="hero-mobile" >
        <h1 class="page-heading heading--xl u-center u-reversed u-cinch-80 p-r-xs p-l-xs m-b-xs">Find Your Graber Window Treatment Expert</h1>
        <img src="${bannerImageUrl}" alt="banner-image" />
        <p class="body--highlight u-center u-reversed u-cinch-80 p-r-xs p-l-xs">Let one of our experts show you custom window treatment solutions designed for your space. Let them take care of measuring and installation, too, so you're guaranteed a perfect finish you'll love for years.</p>
      </div>
      <div class="hero-desktop" >
        <div class="banner-text" >
          <h1 class="page-heading heading--xl u-center u-reversed u-cinch-80 p-r-xs p-l-xs m-b-xs">Find Your Graber Window Treatment Expert</h1>
          <p class="body--highlight u-center u-reversed u-cinch-80 p-r-xs p-l-xs">Let one of our experts show you custom window treatment solutions designed for your space. Let them take care of measuring and installation, too, so you're guaranteed a perfect finish you'll love for years.</p>
        </div>
        <div class="banner-img" >
          <img src="${bannerImageUrl}" alt="banner-image" />
        </div>
      </div>
    </div>`;

    return htmlStr.trim();
  };
}
