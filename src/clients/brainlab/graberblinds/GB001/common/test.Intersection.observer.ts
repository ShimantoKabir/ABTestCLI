export class TestIntersectionObserver {
  private matrixName: string = "";

  observe = (target: Element, matrixName: string) => {
    this.matrixName = matrixName;
    const observer = new IntersectionObserver(this.callback);
    observer.observe(target);
  };

  callback = (entries: any[], observer: any) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // @ts-ignore
        window["optimizely"] = window["optimizely"] || [];
        // @ts-ignore
        window["optimizely"].push({
          type: "event",
          eventName: this.matrixName,
          tags: {
            revenue: 0,
            value: 0.0,
          },
        });
      }
    });
  };
}
