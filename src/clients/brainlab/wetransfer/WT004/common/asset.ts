export const selectors = {
  cookieAcceptBtn: "button#cb-yes",
  cookieRejectBtn: "button#cb-no",
  cookieConfirmSection: "div#cb-gdpr",
};

export const getStartedLink: string =
  "https://wetransfer.com/pricing?trk=file_sharing_header";

export const triggerEvent = (eventName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};

export const closeIcon: string = `
<svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
  <line x1="1.70711" y1="1.29289" x2="16.7071" y2="16.2929" stroke="#ffffff" stroke-width="2"/>
  <line x1="1.29289" y1="16.2929" x2="16.2929" y2="1.29289" stroke="#ffffff" stroke-width="2"/>
</svg>
`;
