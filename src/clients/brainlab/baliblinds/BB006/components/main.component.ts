import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const glideSlides7thList: null | HTMLUListElement = document.querySelector(
      selectors.glideSlidesNthList + "(7)"
    );

    const glideSlides3rdList: null | HTMLUListElement = document.querySelector(
      selectors.glideSlidesNthList + "(2)"
    );

    if (!glideSlides7thList || !glideSlides3rdList) {
      return;
    }

    const cloned7thSlide: HTMLUListElement = glideSlides7thList.cloneNode(
      true
    ) as HTMLUListElement;

    glideSlides3rdList.insertAdjacentElement("afterend", cloned7thSlide);
    glideSlides7thList.remove();
  };
}
