import { onScrollToTreatmentEvent, selectors, shapes } from "../common/asset";

export class ShapeComponent {
  getShapeItemHtml = (shape: any) => {
    const htmlString: string = `
      <div class="wd-link" alt="window-and-door" >
        <a href="${shape.link}" ><img src="${shape.img}" alt="${shape.label}" ></a>
        <a href="${shape.link}" ><p>${shape.label}</p></a>
      </div>
    `;
    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="shape-component" >
        <div class="component-head" >
          <h2 class="main-heading--lg" >Find Your Match</h2>
          <p class="body--lg" >START BY SELECTING THE SHAPE OF YOUR WINDOW OR DOOR</p>
        </div>
        <div class="component-main" >
          <div class="top-window-doors" >
            ${shapes
              .slice(0, 2)
              .map((shape: any) => this.getShapeItemHtml(shape))
              .join("\n")}
          </div>
          <div class="middle-window-doors" >
            ${shapes
              .slice(2, 4)
              .map((shape: any) => this.getShapeItemHtml(shape))
              .join("\n")}
          </div>
          <div class="bottom-window-doors" >
            ${shapes
              .slice(4, 5)
              .map((shape: any) => this.getShapeItemHtml(shape))
              .join("\n")}
          </div>
        </div>
        <div class="component-footer" >
          <a href="/get-started/interactive-product-guide/">
            FIND YOUR WINDOW TREATMENT
          </a>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const treatment: null | HTMLDivElement = document.querySelector(
      selectors.treatment
    );

    if (!treatment) {
      return;
    }

    treatment.insertAdjacentHTML("afterend", this.getHtml());
  };

  addOnVisibleGoal = (selector: string) => {
    const treatment: null | HTMLDivElement = document.querySelector(selector);

    if (!treatment) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          onScrollToTreatmentEvent();
        }

        if (entry.isIntersecting && entry.boundingClientRect.top < 0) {
          onScrollToTreatmentEvent();
        }
      });
    });

    observer.observe(treatment);
  };
}
