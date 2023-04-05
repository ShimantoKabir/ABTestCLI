import { aboutLinks, blogs, securities, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ArticleComponent } from "../components/article.component";
import { BlogComponent } from "../components/blog.component";
import { PublisherComponent } from "../components/publisher.component";
import { SocialComponent } from "../components/social.component";

export class VTwoComponent {
  hiddenSectionSelector = selectors.hiddenSectionSelector;
  getHtml = () => {
    const html = `
    <div class="${TestInfo.ID}__main-component" >
      ${SocialComponent.render()}
      <div class="published-article-blog-footer" >
          <div class="published-article-blog" >
              <div class="published-article" >
                  ${PublisherComponent.render()}
                  ${ArticleComponent.render()}
              </div>
              ${BlogComponent.render("Related Blogs", blogs, true)}
          </div>
          <div class="${TestInfo.ID}__footer" >
            <div class="footer footer-left" >
              ${BlogComponent.render("Additional Resources", securities, false)}
            </div>
            <div class="footer footer-right" >
              ${BlogComponent.render("Additional Resources", aboutLinks, false)}
            </div>
          </div>
      </div>
    </div>
    `;
    return html.trim();
  };

  render = () => {
    document
      .querySelector(this.hiddenSectionSelector)
      ?.insertAdjacentHTML("afterend", this.getHtml());
  };
}
