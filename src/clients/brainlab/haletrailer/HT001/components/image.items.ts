import { imageLinks } from "../common/asset";
import { TestInfo } from "../common/test.info";
import imageItem from "./image.item";

const imageItems = () => {
  const htmlStr = `
    <div class="swiper-container" >
      <div class="swiper-button-prev"></div>
      <div class="${TestInfo.ID.toString()}__swiper swiper">
        <div class="swiper-wrapper">
          ${imageLinks
            .map((imageData) => imageItem(imageData.href, imageData.alt))
            .join("\n")}
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;

  return htmlStr.trim();
};

export default imageItems;
