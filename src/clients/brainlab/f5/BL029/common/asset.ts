import { CartModel } from "../models/cart.model";

export const dummyContent: string = "Hello world!";
export const facebookSvgLink: string =
  "https://www.f5.com/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/facebook-grayscale.svg";
export const twitterSvgLink: string =
  "https://www.f5.com/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/twitter-grayscale.svg";
export const linkedinSvgLink: string =
  "https://www.f5.com/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/linkedin-grayscale.svg";
export const shareSvgLink: string =
  "https://www.f5.com/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/addthis_share.svg";
export const publisherLink: string =
  "https://www.f5.com/authors/ian-dinno.thumb.png";
export const publishedDate = "Feb 08, 2023";
export const publisherName = "IAN DINNO";

export const articles: string[] = [
  "The recent <a class='blue-text' href='https://www.t-mobile.com/news/business/customer-information'>data breach disclosure by T-Mobile</a> highlights the challenges of the burgeoning “wild west” of application security—APIs. An individual (or group) was able to collect the personal data of over 30 million customers via use (or abuse) of an API, siphoning off information daily for over a month before detection.",
  "At the time of writing this, not a lot of specifics are known about exactly how or why the API was abused in this case (e.g., abuse of function, broken object level authorization, excessive data exposure) or how the breach was finally realized. Just examining the numbers, on average, data from 902,000 customers was removed via this API per day without triggering any rate-limiting thresholds, time-series behavioral anomalies, etc. Or maybe they were, but not with the appropriate threat level to be quickly identified and have mitigation action taken by operations teams—it has the hallmarks of a low and slow attack.",
  "Breaches like this give us the opportunity to think about how pervasive APIs are, how critical they are for organizations today, and the unique role they can play in the security (or insecurity) of any application and thus an entire organization. In an <a class='blue-text' href='https://www.f5.com/labs/articles/threat-intelligence/post-breach-analysis-sophistication-and-visibility' >analysis of breaches</a> in recent years, F5 Labs has noticed that in most scenarios where incidents are related to APIs, the breach method is technically very simple and impacts public-facing, poorly secured API endpoints.",
  "Security, when it comes to APIs, is easier said than done (at least done well). With the wave of application security event data being generated for the growing number of applications and endpoints being monitored by most organizations these days, it feels like an impossible task to stay on top of everything.",
  "However, there are three core elements that this attack highlights around API security specifically that organizations can all learn from in prioritizing technology and services that deliver:",
  "API Visibility and Discovery. In this case, it’s not clear if this specific API was known or being actively monitored. Positive security, relying on securely developed and well-documented APIs with schema enforcement functionality, is critical but only half the equation. Chances are most organizations don’t have a handle on every API they have running in their environment, so being able to constantly learn and map APIs that aren’t already documented across all communication paths of an application is of the upmost importance. Discovery technology allows organizations to map their entire API landscape, exposing unknown/shadow APIs, abandoned or zombie APIs to block/remove, and any unknown “good” APIs that should be considered for governance, providing more comprehensive oversight.",
  "Knowing an API exists and having access control capabilities are two critical pieces to the API security puzzle. In our <a class='blue-text' href='https://www.f5.com/state-of-application-strategy-report' >2022 State of Application Strategy Report</a>, 68% of respondents ranked authentication and authorization as the most valuable components of API security—followed not far behind by Behavioral Analysis and Anomaly Detection to monitor APIs, identifying and alerting on abnormal behavior and potential abuse, since there are many ways bad actors can easily bypass authentication and authorization. In this scenario, something about the data being passed between the API and the client must have been unusual. Being able to track API behavior over time once it is in production would generally include API request analysis and time series anomaly detection to build baseline behavioral attributes that would be used to identify anomalies in request rates, errors, latency, throughput, etc. With this functionality, an alerting element is critical to raise issues when unexpected spikes or drops occur, unique traffic patterns are present, or abnormal API requests are detected.",
  "Rounding out a modern API security stack requires an In-Line Application and API Security Enforcement Engine, most likely including a WAF with multiple layers of application security functionality, such as granular L7 policy enforcement with Rate limiting, IP reputation, Allow/Deny list functionality, and L7 DoS with capabilities to further investigate and act on malicious endpoints, users, and other activity. This allows operations teams to quickly and easily identify suspected API abuse as anomalies are detected and create policies to stop that misuse, better protecting APIs and app endpoints over time as they evolve and behavior changes.",
  "More is surely to come out as time passes and we learn about what exactly happened during this specific breach, but it is critical that organizations leverage these three elements to evaluate and better develop a plan to secure their apps and API endpoints from abuse like this.",
  "Learn more about API Security Challenges and Tips for Modern AppDev and API Security",
  "This <a class='black-text' href='https://www.f5.com/solutions/forrester-report-api-security-threats-and-solutions-b' >Forester “API Insecurity” Report</a> highlights the increasing challenges with modern app development and API security, delivering tips on implementing security as part of modern app and API development workflows.",
];

export const blogs: CartModel[] = [
  {
    href: "https://www.f5.com/company/blog/secure-multi-cloud-networking",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/related-blogs/1_blog-multicloud-illustration.png",
    linkText: "Hybrid, Multi-cloud - Why F5 Invests",
    title: "BLOG",
  },
  {
    href: "https://www.f5.com/company/blog/mastering-api-architecture-api-fundamentals",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/related-blogs/2_blog-mastering-api-fundamentals.png",
    linkText: "Mastering API Architecture: API Fundamentals",
    title: "BLOG",
  },
  {
    href: "https://www.f5.com/company/blog/taking-bad-bots-head-on-with-f5-and-aws",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/related-blogs/3_taking-bad-bots-head-on.png",
    linkText: "Taking Bad Bots Head On with F5 and AWS",
    title: "BLOG",
  },
  {
    href: "https://www.f5.com/company/blog/mitigating-architectural-risk",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/related-blogs/4_mitigating-architectural-risk.png",
    linkText: "Mitigating Architectural<br> Risk",
    title: "BLOG",
  },
  {
    href: "https://www.f5.com/company/blog/f5-distributed-cloud-services-stands-up-to-l7-ddos-attacks",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/related-blogs/5_xc-stands-up-to-emerging-ddos-attacks.png",
    linkText:
      "F5 Distributed Cloud Services Stands Up to Emerging L7 DDoS Attacks",
    title: "BLOG",
  },
];

export const securities: CartModel[] = [
  {
    href: "https://www.f5.com/solutions/use-cases/multi-cloud-networking",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/additional-resources/1_multi-cloud-networking.png",
    linkText: "Build Anywhere with Comprehensive Multi-Cloud Networking",
    title: "Use Case",
  },
  {
    href: "https://www.f5.com/resources/reports/state-of-application-strategy-report",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/additional-resources/2_soas-2023-illo-option-cover.png",
    linkText: "2023 State of Application Strategy<br> Report",
    title: "Report",
  },
  {
    href: "https://www.f5.com/solutions/forrester-report-api-security-threats-and-solutions-b",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/additional-resources/3_F5-apis-forrester-report-gated.png",
    linkText: "API Security in the hybrid multi cloud<br> world",
    title: "Forester Report",
  },
];

export const aboutLinks: CartModel[] = [
  {
    href: "https://www.f5.com/solutions/waap-buyers-guide-ebook",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/additional-resources/4_waap-buying-guide.png",
    linkText: "WAAP Buying Guide: Security as a Digital Differentiator",
    title: "eBook",
  },
  {
    href: "https://community.f5.com/t5/technical-articles/f5-hybrid-security-architectures-one-waf-engine-total/ta-p/307248",
    imgSrc:
      "https://medianet.com/cro/f5/bl029/additional-resources/5_hybrid-security-architectures-one-waf-engine.png",
    linkText:
      "F5 Hybrid Security Architectures: One WAF Engine, Total Flexibility",
    title: "Article",
  },
  {
    href: "#dummy",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "F5 Announces General Availability of NGINXaaS for Azure",
    title: "BLOG",
  },
];

export const rightArrow = `
<svg width="15" height="15" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.9766 8.99805L0.976562 8.99805" stroke="#0E6EB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M8.80859 16.498L15.9767 8.99805L8.80859 1.49805" stroke="#0E6EB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;

export const bannerHeadingText =
  "Lessons Learned (So Far) from the T-Mobile Breach";

export const selectors = {
  bannerSelector: "div#platter1878393716",
  hiddenSectionSelector: "div#platter-287410563",
};

export const socialPopUp = {
  facebook: {
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=tbx-300&lng=en&s=facebook&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fthe-future-is-platform-engineering&title=The%20Future%20Is%20Platform%20Engineering&ate=AT-ra-5095d30f38626622/-/-/64272068af9b790a/2&frommenu=1&ips=1&uid=6427199ca63bf0b9&description=Engineering%20platforms%20offer%20self-serve%20access%20to%20secure%2C%20validated%2C%20and%20reusable%20tools%20and%20workflows%20designed%20specifically%20for%20the%20development%20teams%20who%20will%20use%20them%2C%20increasing%20productivity%20while%20providing%20operational%20guardrails%20for%20security%20and%20stability.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Facebook",
  },
  twitter: {
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=men-300&lng=en&s=twitter&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fthe-future-is-platform-engineering&title=The%20Future%20Is%20Platform%20Engineering&ate=AT-ra-5095d30f38626622/-/-/64272068af9b790a/4&frommenu=1&ips=1&uid=6427199ca63bf0b9&description=Engineering%20platforms%20offer%20self-serve%20access%20to%20secure%2C%20validated%2C%20and%20reusable%20tools%20and%20workflows%20designed%20specifically%20for%20the%20development%20teams%20who%20will%20use%20them%2C%20increasing%20productivity%20while%20providing%20operational%20guardrails%20for%20security%20and%20stability.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Twitter",
  },
  linkedin: {
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=men-300&lng=en&s=linkedin&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fthe-future-is-platform-engineering&title=The%20Future%20Is%20Platform%20Engineering&ate=AT-ra-5095d30f38626622/-/-/64272068af9b790a/5&frommenu=1&ips=1&uid=6427199ca63bf0b9&description=Engineering%20platforms%20offer%20self-serve%20access%20to%20secure%2C%20validated%2C%20and%20reusable%20tools%20and%20workflows%20designed%20specifically%20for%20the%20development%20teams%20who%20will%20use%20them%2C%20increasing%20productivity%20while%20providing%20operational%20guardrails%20for%20security%20and%20stability.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Linkedin",
  },
};
