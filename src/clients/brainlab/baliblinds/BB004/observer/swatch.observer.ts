export class SwatchObserver {
  private targetNode: Element | null = null;
  private config = {};

  constructor(targetNode: string) {
    this.targetNode = document.querySelector(targetNode);
    this.config = { attributes: true, childList: true, subtree: true };
  }

  observe = (callBack: MutationCallback) => {
    const observer = new MutationObserver(callBack);
    observer.observe(this.targetNode as Element, this.config);
  };
}
