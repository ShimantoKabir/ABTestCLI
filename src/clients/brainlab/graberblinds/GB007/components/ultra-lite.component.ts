import { imageLink, selectors } from "../common/asset";

export class UltraLiteComponent {
  getHtml = () => {
    const htmlString: string = `
      <div class="ultra-lite-component" >
        <div class="new-tag" >
          <h5>New</h5>
        </div>
        <div class="image" >
          <img src="${imageLink}" alt="UltraLite Cordless Lift System" />
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = (video: HTMLVideoElement) => {
    video.insertAdjacentHTML("afterend", this.getHtml());
  };
}
