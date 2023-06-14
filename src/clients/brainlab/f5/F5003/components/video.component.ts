export class VideoComponent {
  static getHtml = (): string => {
    const html = `
      <div class="f5modal">
        <div class="f5modal__container">
          <button class="f5modal__close-button"></button>
          <div class="f5modal__video">
            <iframe src="https://www.youtube.com/embed/1Q0XU6KAsgs/?controls=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;autoplay=1&amp;enablejsapi=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" id="tealium_youtube0" title="What is a WAAP? On the Brightboard">
            </iframe>
          </div>
        </div>
      </div>
    `;
    return html.trim();
  };
}
