import { selectors, starImages } from "../common/asset";

export class StarComponent {
  getHtml = (imgSrc: string): string => {
    const htmlString = `
            <div class="star-component" >
                <div class="crocodile-section" >
                    <img src="${imgSrc}" alt="mastering api ebook" >
                </div>
                <div class="star-section" >
                    <div class="star-section-wrap" >
                        <div class="headline" >
                            <h3>This FREE eBook offer expires September 30, 2023.</h3>
                        </div>
                        <div class="star-list" >
                            <div class="star-with-comment" >
                                <img src="${starImages.outlineStar}" alt="4.2 on amazon" >
                                <h2>4.2 on Amazon</h2>
                            </div>
                            <div class="star-with-comment" >
                                <img src="${starImages.boldStar}" alt="4.13 on good reads" >
                                <h2>4.13 on GoodReads</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    return htmlString.toString();
  };

  render = (imgSrc: string) => {
    const crocodileSection: null | HTMLDivElement = document.querySelector(
      selectors.crocodileSection
    );

    if (crocodileSection) {
      crocodileSection.insertAdjacentHTML("beforeend", this.getHtml(imgSrc));
    }
  };
}
