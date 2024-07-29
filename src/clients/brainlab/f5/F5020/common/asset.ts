export const selectors = {
  heroText: "div.c01__text.text-inverse.font-weight-bold>p",
  heroHeading: "div.c01__headline-wrap>h1",
  jpHeroHeading: "div.c20__content>div.c20__text-wrap>h1",
  generalHeroHeading: "h1.display-1.text-inverse",
};

export const urlId: string = "/glossary/";

export const redirectUrlMaps = [
  {
    variationName: "learn",
    buttonText: "Learn more",
    urlMap: [
      {
        redirectUrlKey: "load-balancer",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/load-balancing-your-applications",
      },
      {
        redirectUrlKey: "web-application-firewall-waf",
        redirectUrl:
          "https://www.f5.com/resources/demos/distributed-cloud-services-demo",
      },
      {
        redirectUrlKey: "ssl-tls-encryption",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/ssl-orchestrator",
      },
      {
        redirectUrlKey: "virtual-private-network-vpn",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/access-policy-manager",
      },
      {
        redirectUrlKey: "ssl-offloading",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/local-traffic-manager",
      },
      {
        redirectUrlKey: "reverse-proxy",
        redirectUrl: "https://www.f5.com/trials",
      },
      {
        redirectUrlKey: "ssl-vpn",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/access-policy-manager",
      },
      {
        redirectUrlKey: "owasp",
        redirectUrl:
          "https://www.f5.com/resources/infographic/owasp-top-10-2021-infographic",
      },
      {
        redirectUrlKey: "ssl-termination",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/local-traffic-manager",
      },
      {
        redirectUrlKey: "teardrop-attack",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/ddos-attack-protection",
      },
      {
        redirectUrlKey: "brute-force-attack",
        redirectUrl: "https://www.f5.com/solutions/use-cases/bot-management",
      },
      {
        redirectUrlKey: "syn-flood-attack",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/ddos-attack-protection",
      },
      {
        redirectUrlKey: "application-layer-gateway",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/signaling-security",
      },
    ],
  },
  {
    variationName: "action",
    buttonText: "See it action",
    urlMap: [
      {
        redirectUrlKey: "web-application-firewall-waf",
        redirectUrl:
          "https://www.f5.com/resources/demos/distributed-cloud-services-demo",
      },
      {
        redirectUrlKey: "ssl-tls-encryption",
        redirectUrl:
          "https://www.f5.com/resources/infographic/owasp-top-10-2021-infographic",
      },
      {
        redirectUrlKey: "virtual-private-network-vpn",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/ssl-orchestrator",
      },
      {
        redirectUrlKey: "ssl-offloading",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/access-policy-manager",
      },
      {
        redirectUrlKey: "reverse-proxy",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/local-traffic-manager",
      },
      {
        redirectUrlKey: "ssl-vpn",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/access-policy-manager",
      },
      {
        redirectUrlKey: "owasp",
        redirectUrl:
          "https://www.f5.com/products/big-ip-services/local-traffic-manager",
      },
      {
        redirectUrlKey: "ssl-termination",
        redirectUrl: "https://www.f5.com/trials",
      },
    ],
  },
  {
    variationName: "solve",
    buttonText: "See how F5 Solves this",
    urlMap: [
      {
        redirectUrlKey: "load-balancer",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/ddos-attack-protection",
      },
      {
        redirectUrlKey: "teardrop-attack",
        redirectUrl: "https://www.f5.com/solutions/use-cases/bot-management",
      },
      {
        redirectUrlKey: "brute-force-attack",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/ddos-attack-protection",
      },
      {
        redirectUrlKey: "syn-flood-attack",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/signaling-security",
      },
      {
        redirectUrlKey: "application-layer-gateway",
        redirectUrl:
          "https://www.f5.com/solutions/use-cases/load-balancing-your-applications",
      },
    ],
  },
];

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
