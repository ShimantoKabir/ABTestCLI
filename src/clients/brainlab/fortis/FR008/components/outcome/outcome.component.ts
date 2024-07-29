import { outcomes } from "../../common/asset";
import { Outcome } from "../../model/outcome";
import { OutcomeItemComponent } from "./outcome-item.component";

export class OutcomeComponent {
  outcomeItemComponent: OutcomeItemComponent = new OutcomeItemComponent();

  getOutcomeItemHtml = (outcome: Outcome, isReversed: boolean) => {
    const reversedClass: string = isReversed ? "reversed" : "";

    const htmlString: string = `
    <div class="outcome-component ${reversedClass}" >
      <div class="component-wrap" >
        ${this.outcomeItemComponent.getHtml(outcome, isReversed)}
      </div>
    </div>
    `;
    return htmlString.trim();
  };

  getReversedState = (index: number): boolean => {
    return index % 2 === 0 ? true : false;
  };

  getHtml = (): string => {
    return outcomes
      .map((outcome: Outcome, index: number) =>
        this.getOutcomeItemHtml(outcome, this.getReversedState(index))
      )
      .join("\n")
      .trim();
  };
}
