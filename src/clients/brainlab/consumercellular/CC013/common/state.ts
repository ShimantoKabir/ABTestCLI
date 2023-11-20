export class State {
  selectedLine: number = 0;
  isAarpChecked: boolean = false;
  needListener: boolean = false;

  activeListener = () => {
    this.needListener = true;
  };
}
