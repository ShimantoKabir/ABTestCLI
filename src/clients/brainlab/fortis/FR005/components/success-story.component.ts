import {
  leftArrowSvg,
  mboxNames,
  rightArrowSvg,
  successStories,
} from "../common/asset";
import { SuccessStory } from "../models/success-story.model";

export class SuccessStoryComponent {
  slideIndex: number = 1;

  private getSlide = (slide: SuccessStory, index: number): string => {
    const htmlString: string = `
      <div class="component-slide-wrap ${index === 0 ? "active" : ""} fade" >
        <div class="slide-img" >
          <img src="${slide.img}" alt="success-story-holder" >
        </div>
        <div class="slide-details" >
          <div class="title" >  
            <p><strong>${slide.name}</strong>, ${slide.title}</p>
          </div>
          <div class="description" >
            <p>${slide.description}</p>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="success-story-component" >
        <div class="component-container" >
          <div class="slide-arrow" >
            <div class="arrow left-arrow" >
              ${leftArrowSvg}
            </div>
            <div class="arrow right-arrow" >
              ${rightArrowSvg}
            </div>
          </div>
          <div class="component-slide" >
          ${successStories
            .map((story: SuccessStory, index: number) =>
              this.getSlide(story, index)
            )
            .join("\n")}
          </div>
          <div class="slide-dot" > 
          ${successStories
            .map(
              (story: SuccessStory, index: number) =>
                `<span class="dot ${index === 0 ? "active" : ""}" ></span>`
            )
            .join("\n")}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = (unbounceTitle: HTMLDivElement) => {
    unbounceTitle.insertAdjacentHTML("afterend", this.getHtml());

    const leftArrow: null | HTMLDivElement =
      document.querySelector("div.left-arrow");
    const rightArrow: null | HTMLDivElement =
      document.querySelector("div.right-arrow");

    const slides: null | NodeListOf<HTMLDivElement> = document.querySelectorAll(
      "div.component-slide-wrap"
    );
    const dots: null | NodeListOf<HTMLSpanElement> =
      document.querySelectorAll("span.dot");

    if (
      !leftArrow ||
      !rightArrow ||
      !slides ||
      slides.length === 0 ||
      !dots ||
      dots.length === 0
    ) {
      return;
    }

    leftArrow.addEventListener("click", () => {
      this.slideIndex = this.slideIndex - 1;
      this.changeSlide(slides, dots, this.slideIndex);
      console.log("mbox=", mboxNames.slideArrow);
      // @ts-ignore
      adobe.target.trackEvent({ mbox: mboxNames.slideArrow });
    });

    rightArrow.addEventListener("click", () => {
      this.slideIndex = this.slideIndex + 1;
      this.changeSlide(slides, dots, this.slideIndex);
      console.log("mbox=", mboxNames.slideArrow);
      // @ts-ignore
      adobe.target.trackEvent({ mbox: mboxNames.slideArrow });
    });

    dots.forEach((dot: HTMLSpanElement, index: number) => {
      dot.addEventListener("click", () => {
        this.slideIndex = index + 1;
        this.changeSlide(slides, dots, this.slideIndex);
        console.log("mbox=", mboxNames.slideArrow);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.slideArrow });
      });
    });
  };

  changeSlide = (
    slides: NodeListOf<HTMLDivElement>,
    dots: NodeListOf<HTMLSpanElement>,
    nthSlide: number
  ) => {
    if (nthSlide > slides.length) {
      this.slideIndex = 1;
    }

    if (nthSlide < 1) {
      this.slideIndex = slides.length;
    }

    slides.forEach((slide: HTMLDivElement, index: number) => {
      slide.classList.remove("active");
      if (index + 1 === this.slideIndex) {
        slide.classList.add("active");
      }
    });

    dots.forEach((dot: HTMLSpanElement, index: number) => {
      dot.classList.remove("active");
      if (index + 1 === this.slideIndex) {
        dot.classList.add("active");
      }
    });
  };
}
