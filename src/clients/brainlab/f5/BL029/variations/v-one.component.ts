import { aboutLinks, blogs, securities } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ArticleComponent } from "../components/article.component";
import { BlogComponent } from "../components/blog.component";
import { PublisherComponent } from "../components/publisher.component";
import { SocialComponent } from "../components/social.component";

export class VOneComponent {
  hiddenSectionSelector = "div#platter-863662410";
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
                ${BlogComponent.render("Related Blogs", blogs, false)}
            </div>
            <div class="${TestInfo.ID}__footer" >
              <div class="footer footer-left" >
                ${BlogComponent.render(
                  "More about API Security",
                  securities,
                  true
                )}
              </div>
              <div class="footer footer-right" >
                ${BlogComponent.render("More about F5", aboutLinks, true)}
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
      ?.insertAdjacentHTML("beforebegin", this.getHtml());
  };
}
