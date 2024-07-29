import { selectors } from "../common/asset";

export class ProgressComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="sub-headline" >
        <h5>Contact Info</h5>
      </div>
      <div class="progress-container" >
        <div class="progress" ></div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const heading: null | HTMLDivElement = document.querySelector(
      selectors.formHeading
    );
    if (!heading) {
      return;
    }

    heading.insertAdjacentHTML("afterend", this.getHtml());
  };

  makeProgressFull = () => {
    const progress: null | HTMLDivElement =
      document.querySelector("div.progress");
    if (!progress) {
      return;
    }

    progress.classList.add("full");
  };
}
