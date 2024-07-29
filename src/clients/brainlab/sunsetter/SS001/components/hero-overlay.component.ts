import { selectors } from "../common/asset";

export class HeroOverlayComponent {
  private getHtml = () => {
    const htmlString: string = `
      <div class="hero-overlay-component" >
        <div class="heading" >
          <h1>2 Convenient Ways to Buy</h1>
        </div>
        <div class="cta-area" >
          <div class="cta dealer" >
            <h3>Contact your local SunSetter Dealer</h3>
            <a href="/cm/find-a-dealer/" >Find a Dealer</a>
          </div>
          <div class="cta order" >
            <h3>Build your awning today</h3>
            <a href="#prd-header" >Order Today</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const contentOverlays: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.contentOverlay);

    if (!contentOverlays || contentOverlays.length === 0) {
      return;
    }

    contentOverlays.forEach((overlay: HTMLDivElement, index: number) => {
      index === 0 && overlay.insertAdjacentHTML("beforeend", this.getHtml());
    });
  };
}
