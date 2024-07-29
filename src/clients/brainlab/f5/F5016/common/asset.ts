export const selectors = {
  nthDropdownTarget: "div#",
  headingPostFix: "div.content>div.c29-columns",
};

export const getNthSubHeadingSelector = (id: string) => {
  return `${selectors.nthDropdownTarget}${id}>div>${selectors.headingPostFix}`;
};

export const gatLastChildSelector = (id: string) => {
  return `div#${id}>div>div.content>div:last-child`;
};

export const sectionIds: string[] = [
  "f5-distributed-cloud-services",
  "f5-big-ip",
];

export const getAllSubHeadingSelectors = (): string => {
  let selectors: string = "";

  sectionIds.forEach((id: string, index: number) => {
    selectors = selectors + getNthSubHeadingSelector(id);

    if (index !== sectionIds.length - 1) {
      selectors = selectors + ",";
    }
  });

  return selectors;
};

export const getAllLastChildSelectors = (): string => {
  let selectors: string = "";

  sectionIds.forEach((id: string, index: number) => {
    selectors = selectors + gatLastChildSelector(id);

    if (index !== sectionIds.length - 1) {
      selectors = selectors + ",";
    }
  });

  return selectors;
};

export const arrowSvg: string = `
<svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.137695 0.845702L8.38184 6.19824L8.36133 9.80762L8.09473 9.80762L0.137695 3.75781L0.137695 0.845702ZM16.4619 0.845703L16.4619 3.75781L8.48437 9.80762L8.21777 9.80762L8.19727 6.19824L16.4619 0.845703Z" fill="#222222" />
</svg>
`;
