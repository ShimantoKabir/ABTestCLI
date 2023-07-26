import { selectors } from "../common/asset";
import { PlanComponent } from "./plan.component";

export class LineComponent {
  render = (): string => {
    const htmlString = `
    <div class="line-selection-component flex-content">
      <div class="phone-selection-wrapper">
        <div class="phone-selections">
          <div class="phone-selector phone-selector-area" >
            <input type="radio" name="line-selection" value="1">
            <div class="circle-selected fa fa-circle bullet" bullet-number="0" ></div>
            <div class="line"></div>
            <p class="line-text line-text-selected">1</p>
          </div>
          <div class="phone-selector phone-selector-area">
            <input type="radio" name="line-selection" value="2">
            <div class="circle fa fa-circle bullet" bullet-number="1"></div>
            <div class="line"></div>
            <p class="line-text">2</p>  
          </div>
          <div class="phone-selector phone-selector-area">
            <input type="radio" name="line-selection" value="3">
            <div class="circle fa fa-circle bullet" bullet-number="2"></div>
            <div class="line"></div>  
            <p class="line-text">3</p>
          </div>
          <div class="phone-selector last-phone-selector">
            <div class="four-lines">
              <p class="four-lines-text">Need 4 or more lines?</p>
              <p class="four-lines-number">Give us a call (888) 345-5509</p>
            </div>
            <div class="circle-four fa fa-circle"></div>
            <p class="line-text">4</p>
          </div>
        </div>
      </div>
    </div>
    `;

    return htmlString.trim();
  };

  addBulletClickEvent = () => {
    const bullets: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.bullet
    );

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", (e: Event) => {
        if (e.target) {
          const bulletElm: HTMLDivElement = e.target as HTMLDivElement;

          const bulletNumber: number = Number(
            bulletElm.getAttribute("bullet-number")
          );

          const phoneSelectorAreas: null | NodeListOf<Element> =
            document.querySelectorAll(selectors.phoneSelectorArea);

          for (let index = 0; index < bulletNumber; index++) {
            const line = phoneSelectorAreas[index]
              .childNodes[5] as HTMLDivElement;

            const bullet = phoneSelectorAreas[index + 1]
              .childNodes[3] as HTMLDivElement;

            line.classList.add("line-selected");
            line.classList.remove("line");

            bullet.classList.add("circle-selected");
            bullet.classList.remove("circle");
          }

          for (
            let index = bulletNumber;
            index < phoneSelectorAreas.length;
            index++
          ) {
            const line = phoneSelectorAreas[index]
              .childNodes[5] as HTMLDivElement;

            const area = phoneSelectorAreas[index + 1];

            if (area) {
              const bullet = area.childNodes[3] as HTMLDivElement;

              line.classList.remove("line-selected");
              line.classList.add("line");

              bullet.classList.remove("circle-selected");
              bullet.classList.add("circle");
            }
          }

          for (let index = 0; index < phoneSelectorAreas.length; index++) {
            const text = phoneSelectorAreas[index]
              .childNodes[7] as HTMLParagraphElement;

            if (index === bulletNumber) {
              text.classList.add("line-text-selected");
            } else {
              text.classList.remove("line-text-selected");
            }
          }

          PlanComponent.changePlanData(bulletNumber);
        }
      });
    });
  };
}
