import { TestObserver } from "./test.observer";

export class LocationObserver {
  static previousUrl: string = "";

  static listen = (callback: Function) => {
    const testObserver = new TestObserver("body");

    const mutationCallback = (mutationList: MutationRecord[]) => {
      if (location.href !== this.previousUrl) {
        this.previousUrl = location.href;
        callback();
      }
    };

    testObserver.observe(mutationCallback);
  };
}
