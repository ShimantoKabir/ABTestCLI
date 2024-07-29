import { Initializer } from "../../../../../utilities/initializer";
import { bottomContent, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { UltraLiteComponent } from "./ultra-lite.component";

export class MainComponent {
  ultraLiteComponent: UltraLiteComponent = new UltraLiteComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const video: null | HTMLVideoElement = document.querySelector(
      selectors.video
    );

    if (!video) {
      return;
    }

    this.ultraLiteComponent.render(video);
    this.changeBottomContent(video);
  };

  changeBottomContent = (video: HTMLVideoElement) => {
    const parent: null | HTMLElement = video.parentElement;

    if (!parent) {
      return;
    }

    const link: null | HTMLAnchorElement = parent.querySelector("a.link");
    const heading: null | HTMLAnchorElement =
      parent.querySelector("h2.heading--lg");
    const body: null | HTMLParagraphElement =
      parent.querySelector("p.body--regular");

    if (!link || !body || !heading) {
      return;
    }

    link.textContent = bottomContent.linkText;
    link.setAttribute("href", bottomContent.linkHref);

    body.textContent = bottomContent.body;
    heading.textContent = bottomContent.heading;
    heading.classList.remove("pt-4");
    heading.classList.add("pt-5");
  };
}
