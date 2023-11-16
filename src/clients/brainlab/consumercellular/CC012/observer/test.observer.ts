export class TestObserver {
  private targetNode: Element | null = null;
  private config = {};

  constructor(targetNode: string) {
    this.targetNode = document.querySelector(targetNode);
    this.config = {
      childList: true,
      subtree: true,
      characterData: true,
    };
  }

  observe = (callBack: MutationCallback): MutationObserver => {
    const observer = new MutationObserver(callBack);
    observer.observe(this.targetNode as Element, this.config);
    return observer;
  };
}
