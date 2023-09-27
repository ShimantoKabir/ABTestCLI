import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const bannerSlider: null | HTMLUListElement = document.querySelector(
      selectors.bannerSlider
    );

    if (!bannerSlider) {
      return;
    }

    // bannerSlider.childNodes.forEach((c) => {
    //   const elm = c as Element;

    //   if (elm && elm.nodeType === 1) {
    //     elm.classList.remove("glide__slide--active");
    //   }
    // });

    // const elm = bannerSlider.childNodes[2] as Element;

    // console.log("elm", elm.outerHTML);

    const nthSlide: null | HTMLLIElement = document.querySelector(
      "ul.glide__slides>li:nth-child(2)"
    );

    if (nthSlide) {
      nthSlide.insertAdjacentHTML("afterend", nthSlide.outerHTML);
    }

    // elm.classList.add("glide__slide--active");
    // elm.classList.add("new-slide");
    // bannerSlider.insertAdjacentHTML("afterbegin", elm.outerHTML);
  };
}
