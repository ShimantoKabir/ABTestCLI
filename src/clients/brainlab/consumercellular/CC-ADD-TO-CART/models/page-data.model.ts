export class PageData {
  eventName: string = "";
  selector: string = "";
  mBoxName: string = "";

  constructor(selector: string, mBoxName: string) {
    this.selector = selector;
    this.mBoxName = mBoxName;
  }
}
