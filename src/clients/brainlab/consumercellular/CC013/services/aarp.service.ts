import { selectors } from "../common/asset";
import { State } from "../common/state";

export class AarpService {
  isAarpChecked: boolean = false;
  state!: State;

  constructor(state: State) {
    this.state = state;
  }

  addListener = (onChange: Function, checkboxSelector: string) => {
    const aarpCheckbox: null | HTMLDivElement =
      document.querySelector(checkboxSelector);

    if (!aarpCheckbox) {
      return;
    }

    aarpCheckbox.addEventListener("click", () => {
      this.isAarpChecked = this.getAarpCheckboxValue(aarpCheckbox);
      this.state.needListener && onChange(this.isAarpChecked);
    });
  };

  getAarpCheckboxValue = (aarpCheckbox: HTMLDivElement): boolean => {
    const value: string | null | undefined =
      aarpCheckbox.firstElementChild?.getAttribute("value");

    return value && value === "true" ? true : false;
  };
}
