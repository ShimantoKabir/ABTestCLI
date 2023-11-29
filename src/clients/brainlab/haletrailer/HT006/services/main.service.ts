import { Trailer } from "../models/trailer";
import { Link } from "../models/link";

export class MainService {
  private trailers: Trailer[] = [];

  collectData = (dataElements: NodeListOf<HTMLDivElement>): Trailer[] => {
    dataElements.forEach((block: HTMLDivElement) => {
      this.getBlockChild(block);
    });

    return this.trailers;
  };

  getBlockChild = (block: HTMLDivElement) => {
    block.childNodes.forEach((node: ChildNode) => {
      if (node.nodeType === 1) {
        const content: HTMLDivElement = node as HTMLDivElement;
        content.childElementCount > 0 && this.getData(content);
      }
    });
  };

  getData = (content: HTMLDivElement) => {
    const heading: null | HTMLHeadingElement = content.querySelector("h2");
    const description: null | HTMLParagraphElement = content.querySelector("p");
    const links: null | NodeListOf<HTMLAnchorElement> =
      content.querySelectorAll("a");

    description && description.classList.add("accordion-description");

    this.trailers.push({
      headline: heading && heading.textContent ? heading.textContent : "",
      description:
        description && description.innerHTML ? description.innerHTML : "",
      links: links && links.length > 0 ? this.getLinksData(links) : [],
    });
  };

  getLinksData = (linkElements: NodeListOf<HTMLAnchorElement>): Link[] => {
    const links: Link[] = [];
    linkElements.forEach((link: HTMLAnchorElement) => {
      link.classList.add("accordion-link");
      links.push({
        href: link.href,
        text: link.textContent ? link.textContent : "",
      });
    });

    return links;
  };

  getTrailers = (): Trailer[] => {
    return this.trailers;
  };
}
