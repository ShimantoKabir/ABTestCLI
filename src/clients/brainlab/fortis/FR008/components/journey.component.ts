import { journeyOutcome } from "../common/asset";
import { OutcomeItemComponent } from "./outcome/outcome-item.component";

export class JourneyComponent {
  outcomeItemComponent: OutcomeItemComponent = new OutcomeItemComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="outcome-component reversed journey" >
        <div class="component-wrap" >
          ${this.outcomeItemComponent.getHtml(journeyOutcome, true)}
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
