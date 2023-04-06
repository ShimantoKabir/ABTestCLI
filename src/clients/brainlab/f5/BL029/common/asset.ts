import { AppPortfolioComponent } from "../components/app-portfolio.component";
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
export const publisherImgLink: string =
  "https://www.f5.com/authors/lori-macvittie.thumb.png";
export const publishedDate = "Jan 11, 2023";
export const publisherName = "LORI MACVITTIE";
export const publisherLink = "https://www.f5.com/authors/lori-macvittie";

export const distribution = {
  imgSrc:
    "https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/company/blog/2023/app-portfolio-distribution-soas-2023.jpg",
  text: "But even that ignores the reality of hybrid IT, which has been right under our noses since cloud appeared and took business by storm. Pun intended. Because even as organizations adopted cloud, most were still dealing with traditional on-premises environments. Because most enterprises aren’t new; they’ve been operating for twenty, thirty, even fifty years. That means they’ve had an established portfolio that spans every generation of major app architectures, from monoliths to microservices, from client-server to mobile.",
};

export const articles: string[] = [
  "For years the industry has been dancing around the realities—and subsequent challenges—of hybrid IT by calling it multi-cloud.",
  "This is not to say that organizations are not operating in multiple clouds; they most certainly are. But it is to say that the term fails to fully capture that “cloud” is an operating model that isn’t just peculiar to public providers of infrastructure as a service. Indeed, our data has shown, year after year, that organizations operate on-premises cloud, as well as embracing its public versions.",
  AppPortfolioComponent.render(),
  "For this year’s annual research, we got specific about environments on-premises, because we wanted to understand the realities that our customers are facing. The data speaks for itself: enterprises have been, and continue to be, hybrid.",
  "It’s not just the research for this report, either. When <a class='indigo-text' href='https://www.nginx.com/blog/2022-nginx-state-of-app-api-delivery-report/' >F5 NGINX polled its open source community</a>, guess what it found (among other interesting bits)? Yes, that hybrid is here to stay.",
  "Now, without spoiling all the findings from our upcoming <a class='indigo-text' href='https://www.f5.com/resources/reports/state-of-application-strategy-report' >State of Application Strategy report</a>, I will say that the trend toward modern applications is strong, but there are indications that some organizations will never be “all in” on replacing traditional apps with more modern versions.",
  "Ergo, therefore, and thusly, enterprises will remain hybrid for many years to come.",
  "But that leads us to ask, what does that mean for security? In particular, for app and API security?",
  "<h2 class='article-headline' >The Implications for App and API Security</h2>",
  "If we operate on the assumption that organizations are hybrid at their core (app portfolio) as well as their operational environments, then the implications for app and API security are pretty profound.",
  "That’s because some application environments, like containers, have unique security needs that can’t be addressed by traditional security solutions. It also means that, with apps remaining on-premises, organizations will struggle to find consistent security solutions able to span core, cloud, and edge deployments of application workloads. But wait, there’s more! Because it also means that the need for existing traditional solutions does not simply vanish, especially those that focus on protecting apps and API from protocol abuse and exploitation.",
  "Unfortunately for organizations, hybrid IT does not—and cannot—imply hybrid security.",
  "By hybrid security I mean mixing app and API security services from one vendor with another and another and another. While shifting security left into the app lifecycle sounds like a great solution, it too often leads to the path of least resistance—a multitude of incompatible app and API security services that complicate and frustrate efforts to secure all apps and APIs.",
  "We’re already seeing the impact of complexity of cloud tools and APIs on organizations in the inability to consistently apply security across all applications. A mix-and-match, à la carte approach to app and API security is not working for most organizations as seen in the substantial increase in breaches over the past year attributed to vulnerabilities and exploits of—wait for it—app and APIs.",
  "The reality of hybrid IT on security is that the patchwork, à la carte approach to securing apps and APIs is not going to work long-term. We need a better approach, and it needs to recognize that IT and the enterprise are, and will be for the foreseeable future, hybrid.",
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
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=tbx-300,men-300&lng=en&s=facebook&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fwhat-hybrid-it-means-for-app-and-api-security&title=What%20Hybrid%20IT%20Means%20for%20App%20and%20API%20Security&ate=AT-ra-5095d30f38626622/-/-/642d84ff65edd1ce/3&frommenu=1&uid=642d84ffbde33de1&description=The%20year%202022%20will%20be%20remembered%20as%20the%20year%20the%20industry%20finally%20reconciled%20itself%20to%20the%20fact%20that%20IT%20is%20and%20will%20be%20for%20the%20foreseeable%20future%2C%20hybrid.%20The%20question%20is%2C%20what%20does%20that%20mean%20for%20security%20and%2C%20specifically%2C%20for%20app%20and%20API%20security.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Facebook",
  },
  twitter: {
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=tbx-300,men-300&lng=en&s=twitter&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fwhat-hybrid-it-means-for-app-and-api-security&title=What%20Hybrid%20IT%20Means%20for%20App%20and%20API%20Security&ate=AT-ra-5095d30f38626622/-/-/642d84ff65edd1ce/4&frommenu=1&uid=642d84fffd4eed68&description=The%20year%202022%20will%20be%20remembered%20as%20the%20year%20the%20industry%20finally%20reconciled%20itself%20to%20the%20fact%20that%20IT%20is%20and%20will%20be%20for%20the%20foreseeable%20future%2C%20hybrid.%20The%20question%20is%2C%20what%20does%20that%20mean%20for%20security%20and%2C%20specifically%2C%20for%20app%20and%20API%20security.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Twitter",
  },
  linkedin: {
    url: "https://www.addthis.com/bookmark.php?v=300&winname=addthis&pub=ra-5095d30f38626622&source=tbx-300,men-300&lng=en&s=linkedin&url=https%3A%2F%2Fwww.f5.com%2Fcompany%2Fblog%2Fwhat-hybrid-it-means-for-app-and-api-security&title=What%20Hybrid%20IT%20Means%20for%20App%20and%20API%20Security&ate=AT-ra-5095d30f38626622/-/-/642d84ff65edd1ce/5&frommenu=1&uid=642d84ffcb242e09&description=The%20year%202022%20will%20be%20remembered%20as%20the%20year%20the%20industry%20finally%20reconciled%20itself%20to%20the%20fact%20that%20IT%20is%20and%20will%20be%20for%20the%20foreseeable%20future%2C%20hybrid.%20The%20question%20is%2C%20what%20does%20that%20mean%20for%20security%20and%2C%20specifically%2C%20for%20app%20and%20API%20security.&uud=1&ct=1&tt=0&captcha_provider=recaptcha2&pro=1",
    name: "Linkedin",
  },
};
