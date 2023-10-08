import { Icon } from "../models/icon";

export class IconStepComponent {
  static render = (icon: Icon) => {
    const htmlString: string = `
            <div class="icon-step" >
                <div class="svg" >
                    ${icon.svg}
                </div>
                <div class="text" >
                    <h4>${icon.text}</h4>
                </div>
            </div>
        `;

    return htmlString.trim();
  };
}
