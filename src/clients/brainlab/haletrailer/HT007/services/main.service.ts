import { selectors } from "../common/asset";
import { Service } from "../models/Service";

export class MainService {
  services: Service[] = [];

  collectData = (): Service[] => {
    const provideSection: null | HTMLDivElement = document.querySelector(
      selectors.provideSection
    );
    if (!provideSection) {
      return [];
    }

    provideSection.childNodes.forEach((child: ChildNode) => {
      if (child.nodeType === 1) {
        const provideItem: HTMLDivElement = child as HTMLDivElement;
        this.getItemData(provideItem);
      }
    });

    return this.services;
  };

  getItemData = (provideItem: HTMLDivElement) => {
    const service: Service = new Service();
    const headline: null | HTMLHeadingElement = provideItem.querySelector("h3");

    const listElements: null | NodeListOf<HTMLLIElement> =
      provideItem.querySelectorAll("li");

    if (
      !headline ||
      !headline.textContent ||
      !listElements ||
      listElements.length === 0
    ) {
      return null;
    }

    service.headline = headline.textContent.split("/").join(" / ");
    service.items = this.getItemListDate(listElements);
    this.services.push(service);
  };

  getItemListDate = (listElements: NodeListOf<HTMLLIElement>): string[] => {
    const listTexts: string[] = [];
    listElements.forEach((item: HTMLLIElement) => {
      item.textContent && listTexts.push(item.textContent);
    });

    return listTexts;
  };
}
