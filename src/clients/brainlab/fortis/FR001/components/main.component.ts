import { Initializer } from "../../../../../utilities/initializer";
import { messages } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { MsgComponent } from "./msg.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    if (TestInfo.VARIATION.toString() === "1") {
      const component = new MsgComponent(messages.v1.text, messages.v1.icon);
      component.render();
    } else if (TestInfo.VARIATION.toString() === "2") {
      const component = new MsgComponent(messages.v2.text, messages.v2.icon);
      component.render();
    }
  };
}
