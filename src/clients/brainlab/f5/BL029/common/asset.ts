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
  "https://www.f5.com/authors/dave-morrissey.thumb.png";
export const publishedDate = "Feb 08, 2023";
export const publisherName = "DAVE MORRISSEY";

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
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText:
      "F5 Celebrates Channel Ecosystem With Recognition of Key North America Partners",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText:
      "Kara Sprague, Executive Vice President and Chief Product Officer at F5 – Q&A",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Rise of the Bots (Dan Woods Q&A Part 2)",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Rise of the Bots (Dan Woods Q&A Part 2)",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Rise of the Bots (Dan Woods Q&A Part 2)",
    title: "BLOG",
  },
];

export const securities: CartModel[] = [
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Mitigating Architectural Risk",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Don’t Get Sacked by Cyberattacks This Super Bowl",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "The Top 10, Top 10 Predictions for 2023",
    title: "BLOG",
  },
];

export const aboutLinks: CartModel[] = [
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "Meet F5’s Powerful Next-Generation F5OS Platforms",
    title: "BLOG",
  },
  {
    href: "#",
    imgSrc:
      "https://www.f5.com/content/dam/f5-com/global-assets/resources-featurettes/dist-cloud-blog-feature_730x508.png",
    linkText: "F5 Announces General Availability of NGINXaaS for Azure",
    title: "BLOG",
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
