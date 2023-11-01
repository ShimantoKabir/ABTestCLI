import { TestObserver } from "./test.observer";

export class LocationObserver {
  static previousPathname: string = "";

  static listen = (callback: Function) => {
    const testObserver = new TestObserver("body");

    const mutationCallback = (mutationList: MutationRecord[]) => {
      if (location.pathname !== this.previousPathname) {
        this.previousPathname = location.pathname;
        callback(location.pathname);
      }
    };

    testObserver.observe(mutationCallback);
  };
}
