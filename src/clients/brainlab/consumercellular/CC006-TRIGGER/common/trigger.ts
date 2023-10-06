export class AdobeTarget {
  static trigger = (triggerMboxName: string) => {
    // @ts-ignore
    adobe.target.getOffer({
      mbox: triggerMboxName,
      // @ts-ignore
      success: function (offers) {
        // @ts-ignore
        adobe.target.applyOffer({
          mbox: triggerMboxName,
          offer: offers,
        });
        if (console && console.log) {
          console.log("triggerMboxName=", triggerMboxName);
          console.log("offers=", offers);
        }
      },
      // @ts-ignore
      error: function (status, error) {
        if (console && console.log) {
          console.log("status=" + status + ", error=", error);
        }
      },
      timeout: 5000,
    });
  };
}
