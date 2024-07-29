import { Icon } from "../models/icon";

export class IconStepComponent {
  static render = (icon: Icon) => {
    const htmlString: string = `
      <div class="icon-step" >
        <div class="svg" >
          <img src="${icon.svg}" alt="${icon.text}" />
        </div>
        <div class="text" >
          <h4>${icon.text}</h4>
          <p>${icon.description}</p>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
