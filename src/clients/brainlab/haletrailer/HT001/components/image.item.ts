import { TestInfo } from "../common/test.info";

const imageItem = (imageSrc: string, altText: string) => {
  const htmlStr = `<div class="${TestInfo.ID.toString()}__image-item swiper-slide">
      <div class="image-wrapper">
        <img src="${imageSrc}" alt="${altText}">
      </div>
    </div>`;
  return htmlStr.trim();
};

export default imageItem;
