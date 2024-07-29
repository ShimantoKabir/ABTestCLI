import { abouts } from "../common/asset";

export class AboutComponent {
  getAboutItemHtml = (about: any, index: number): string => {
    const reverseClass: string = index % 2 === 0 ? "" : "reverse";

    const htmlString: string = `
      <div class="about-item ${reverseClass}" >
        <div class="img" >
          <img src="${about.img}" alt="about-img" >
        </div>
        <div class="item-text" >
          <div class="title" >
            <h4>${about.title}</h4>
          </div>
          <div class="description" >
            <p>${about.description}</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="about-component" >
        <div class="component-wrap" >
        ${abouts
          .map((about: any, index: number) =>
            this.getAboutItemHtml(about, index)
          )
          .join("\n")}
          <div class="cta" >
            <button mbox-name="about-apply-button" >LEARN HOW TO APPLY</button>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
