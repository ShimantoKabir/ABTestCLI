export class SuccessObserver {
  private targetNode: null | Element = null;
  private config: MutationObserverInit = { attributes: true };

  constructor() {
    this.targetNode = document.querySelector("div.success-message");
  }

  observe = () => {
    const observer = new MutationObserver(this.callback);
    observer.observe(this.targetNode as Node, this.config);
  };

  callback = (mutationList: any, observer: any) => {
    for (const mutation of mutationList) {
      if (mutation.type === "attributes") {
        // @ts-ignore
        adobe.target.trackEvent({ mbox: "form-submission-success" });
        break;
      }
    }
  };
}
