import { TestInfo } from "./common/test.info";
import { DummyComponent } from "./components/dummy.component";

class Main {
  init = () => {
    const dummyComponent = new DummyComponent();
    dummyComponent.render();
    console.log(JSON.stringify(TestInfo));
  };
}

const index = new Main();
index.init();
