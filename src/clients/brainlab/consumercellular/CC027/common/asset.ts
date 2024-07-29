export const selectors = {
  tradeInPrompt: "div.trade-in-prompt.on-top",
  blueBar: "hr.blue-bar",
  bodyContent: "div#shopping-page-container>div.body-content",
};

export const telInfo = {
  byod: {
    telNumber: 8887660504,
    telText: "(888)766-0504",
  },
  plp: {
    telNumber: 8887660506,
    telText: "(888)766-0506",
  },
};

export const storeLink: string =
  "https://www.consumercellular.com/retailstores";

export const tradeMessage = {
  free: "Buy any phone and get two months of service free.",
  term: `This offer is for new customers and ONLY available by calling or visiting a <a class="store" href="${storeLink}" target="_blank" >Consumer Cellular store</a>. Terms apply.*`,
  redeem: (telInfo: any): string => {
    return `Call <a class='tel-number' href='tel:+${telInfo.telNumber}' >${telInfo.telText}</a> to redeem offer. Offer ends July 31, 2024.`;
  },
};

export const disclaimer: string =
  "*Only applicable for new customers with purchase of a phone at account activation by 7/31/24. Monthly base service fee credit applied to 2nd and 3rd invoices before other applicable discounts. Offer may be modified or discontinued at any time. Taxes, fees, and other third-party charges. One promotion per account. Must call or visit Consumer Cellular directly to redeem. Not valid at third-party retailers. Customers who had service from Consumer Cellular within 90 days are ineligible.";
