import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ButtonComponent } from "./button.component";
import { HeroTextComponent } from "./hero-text.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    let paragraphs: string[] = [];

    const heroParagraph: null | HTMLParagraphElement = document.querySelector(
      selectors.paragraphContent
    );

    console.log("heroParagraph=", heroParagraph?.firstChild?.textContent);

    if (
      heroParagraph &&
      heroParagraph.firstChild &&
      heroParagraph.firstChild.textContent
    ) {
      heroParagraph.remove();
      heroParagraph.firstChild.textContent
        .trim()
        .split(".")
        .forEach((text) => {
          if (text) {
            text = text.trimStart();
            text = text.trimEnd();
            paragraphs.push(text);
          }
        });
    }

    const heroTextComponent = new HeroTextComponent();
    heroTextComponent.render(paragraphs);

    const buttonComponent = new ButtonComponent();
    buttonComponent.render();
    buttonComponent.addEventListener();
  };
}
