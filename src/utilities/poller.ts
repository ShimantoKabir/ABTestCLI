import { UserOptions } from "./user.options";

export class Poller {
  private options: UserOptions | null = null;
  private timeout: number | null = null;
  private successfulConditions: boolean[] = [];
  private callback: Function = () => {};
  private conditionsLength: number = 0;

  poll = (
    conditions: Function[] | string[],
    callback: Function,
    userOptions?: UserOptions
  ) => {
    this.callback = callback;
    this.options = new UserOptions();
    this.conditionsLength = conditions.length;

    if (userOptions) {
      this.options = userOptions;
    }

    this.timeout = this.options.timeout
      ? new Date(this.getNow() + this.options.timeout).getTime()
      : null;

    for (let i = 0; i < conditions.length; i++) {
      this.pollForCondition(
        conditions[i],
        this.options.wait,
        true,
        this.options.multiplier
      );
    }
  };

  getNow = (): number => {
    return new Date().getTime();
  };

  isTimeOut = (): boolean => {
    if (this.timeout && this.getNow() > this.timeout) {
      return true;
    }
    return false;
  };

  evaluateCondition = (condition: Function | string): boolean => {
    if (!condition) {
      return false;
    }

    if (typeof condition === "function") {
      return condition();
    }

    if (typeof condition === "string" && document.querySelector(condition)) {
      return true;
    }

    return false;
  };

  isAllConditionPassed = (): boolean => {
    return this.conditionsLength === this.successfulConditions.length;
  };

  pollForCondition = (
    condition: Function | string,
    waitTime: number,
    skipWait: boolean,
    multiplier: number
  ): boolean => {
    if (this.timeout && this.isTimeOut()) {
      return false;
    }

    const result = this.evaluateCondition(condition);

    if (result) {
      this.successfulConditions.push(result);

      if (this.isAllConditionPassed()) {
        this.callback(this.successfulConditions);
      }
    } else {
      setTimeout(
        () => {
          this.pollForCondition(
            condition,
            waitTime * multiplier,
            skipWait,
            multiplier
          );
        },
        skipWait ? 0 : waitTime
      );
    }

    return true;
  };
}
