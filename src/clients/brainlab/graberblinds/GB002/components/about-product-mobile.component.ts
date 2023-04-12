import { products, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ProductComponent } from "./product.component";
import { SliderControlComponent } from "./slider-control.component";

export class AboutProductMobileComponent {
  private slideIndex = 1;
  private sliderController = new SliderControlComponent();

  private getHtml = (): string => {
    const html: string = `<div class="${
      TestInfo.ID
    }__about-product-mobile-component" >
      <div class="grid-container content-container m-b-lg m-t-none">
        <h2 class="heading--lg text-center">Learn More about Our Latest Innovative Products</h2>
      </div>
      <div class="slideshow-container">
        ${products
          .map((product) => ProductComponent.render(product))
          .join("\n")}
      </div>
      ${this.sliderController.getHtml()}
    </div>`;
    return html.trim();
  };

  render = (): void => {
    document
      .querySelector(selectors.productPromoSelector)
      ?.insertAdjacentHTML("afterend", this.getHtml());
    this.showSlides(this.slideIndex);

    this.setSliderBtnClick("next-btn");
    this.setSliderBtnClick("prev-btn");

    this.setDotClick();
  };

  setSliderBtnClick = (className: string) => {
    document
      .querySelector("button." + className)
      ?.addEventListener("click", () => {
        this.slideIndex = this.slideIndex + 1;
        this.showSlides(this.slideIndex);
      });
  };

  setDotClick = () => {
    const dots = document.querySelectorAll<HTMLElement>("span.dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const target = e.target as HTMLAnchorElement;
        this.slideIndex = Number(target.getAttribute("position"));
        this.showSlides(this.slideIndex);
      });
    });
  };

  showSlides = (n: number) => {
    let i;
    const slides = document.querySelectorAll<HTMLElement>(
      "div.slideshow-container>a.my-slide"
    );
    const dots = document.querySelectorAll<HTMLElement>("span.dot");

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  };
}
