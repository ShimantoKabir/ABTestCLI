import { bannerText } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class BannerComponent {
  heroSectionSelector: string = "div.sect-hero";

  getHtml = (): string => {
    return `<div class="${TestInfo.ID}__banner-container" >
      <div class="banner-wrap" >
        <div class="banner-text" >
          <h1><em>${bannerText}</em></h1>
        </div>
        <div class="banner-form" >
          <div class="form-container" >
            <h2>SEARCH</h2>
            <form role="search" method="post" id="searchform" action="https://haletrailer.com/" class="uk-search uk-search-default">
              <input type="hidden" name="search-type" value="header">
              <span class="uk-search-icon-flip uk-icon uk-search-icon" style="color:var(--black)" uk-search-icon=""><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg></span>
              <input class="uk-search-input" type="search" placeholder="Ex: trailer #, ABS, Great Dane" value="" name="s" id="s">
            </form>
          </div>
        </div>
      </div>
    </div>`;
  };

  render = (): void => {
    document
      .querySelector(this.heroSectionSelector)
      ?.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
