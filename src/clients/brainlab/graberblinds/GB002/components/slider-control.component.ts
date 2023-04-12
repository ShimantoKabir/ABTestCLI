import { products } from "../common/asset";

export class SliderControlComponent {
  getHtml = (): string => {
    const html: string = `<div class="slider-control">
            <button class="prev-btn">
                <img src="https://www.graberblinds.com/assets/dist/images/icons/slick-arrow-prev.svg" alt="previous" >
            </button>
            <div class="dots-container" >
                ${products
                  .map((product, index) => {
                    return this.getDotHtml(index);
                  })
                  .join("\n")}
            </div>
            <button class="next-btn">
                <img src="https://www.graberblinds.com/assets/dist/images/icons/slick-arrow-next.svg" alt="next" >
            </button>
        </div>`;

    return html.trim();
  };

  getDotHtml = (index: number): string => {
    const html: string = `<span class="dot" position="${index + 1}" ></span>`;
    return html.trim();
  };
}
