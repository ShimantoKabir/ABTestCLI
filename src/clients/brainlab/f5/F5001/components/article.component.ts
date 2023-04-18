import { TestInfo } from "../common/test.info";

export class ArticleComponent {
  static render = (): string => {
    const htmlStr = `
    <div class="${TestInfo.ID}__article-component" >
      <div class="c29-columns__col c29-columns__col--two-wide">
        <div>
          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
            <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
              <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:margin-top-md U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container-1803928893">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom-751787062" class="at04 U:padding-bot">
                            <p>As our world becomes more digitally driven, applications and APIs are the building blocks of the experiences through which we all work, bank, shop, access healthcare, travel, and play. But operating the apps and APIs that fuel your business has become increasingly complex. According to data from our <a href="/resources/reports/state-of-application-strategy-report" data-di-id="di-id-90a5da6-5cee1aeb">2023 State of Application Strategy (SOAS) Report</a>, 85 percent of organizations operate applications with multiple architectures and deploy them across distributed environments. And the digital experiences you deliver are only as secure as the most vulnerable app or API. IT leaders today have a daunting job as they face a growing number of cyberattacks, increasing regulatory requirements, rising costs, shrinking budgets, and heightened expectations from end users around app security, availability, and overall experience. </p>
                            <p>The good news is there are ways to mitigate that complexity while bolstering the security and reliability of your apps and APIs.</p>
                          </div>
                        </div>
                        <div data-component-type="platter" class="c29-columns js-inview">
                          <div id="platter244869286" class="bg-default c29-columns__wrap">
                            <div class="c29-columns__container">
                              <div class="row">
                                <div class="c29-columns__col">
                                  <div>
                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                      <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                                        <style type="text/css"></style>
                                        <div class="bg-default cont01 U:padding-top hidden-xs hidden-sm height-1 theme-default theme-wrap" dir="auto" id="container-1050254143">
                                          <div>
                                            <div class="content parsys">
                                              <div data-component-type="atom" class="at05" data-component-title="SVG Bloc">
                                                <div>
                                                  <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 790.388 526.099" data-di-res-id="d44ceacd-d4801f10" data-di-rand="1681852572304">
                                                    <g id="Layer_1-2">
                                                      <path d="m312.446,122.863c1.513-5.559,2.333-11.398,2.333-17.429,0-36.959-30.301-66.92-67.679-66.92-29.014,0-53.754,18.058-63.378,43.422-7.275-3.26-15.346-5.09-23.853-5.09-31.962,0-57.871,25.619-57.871,57.221v.008c-21.425.089-38.768,17.282-38.768,38.488s17.431,38.496,38.933,38.496h183.613c26.839,0,48.597-21.513,48.597-48.052,0-16.794-8.727-31.555-21.927-40.146Z" fill="#1e9cd3"></path>
                                                      <path d="m768.461,386.304c1.513-5.559,2.333-11.398,2.333-17.429,0-36.959-30.301-66.92-67.679-66.92-29.014,0-53.754,18.058-63.378,43.422-7.275-3.26-15.346-5.09-23.853-5.09-31.962,0-57.871,25.619-57.871,57.221v.008c-21.425.089-38.768,17.282-38.768,38.488s17.431,38.496,38.933,38.496h183.613c26.839,0,48.597-21.513,48.597-48.052,0-16.794-8.727-31.555-21.927-40.146Z" fill="#1e9cd3"></path>
                                                      <path d="m393.649,383.178c2.389-9.008,3.685-18.47,3.685-28.243,0-59.89-47.862-108.441-106.903-108.441-45.829,0-84.907,29.262-100.109,70.364-11.492-5.282-24.239-8.248-37.677-8.248-50.485,0-91.41,41.515-91.41,92.725v.013c-33.842.144-61.236,28.005-61.236,62.369s27.533,62.381,61.497,62.381h290.025c42.394,0,76.761-34.862,76.761-77.866,0-27.214-13.785-51.134-34.635-65.055Z" fill="#0c5c8d"></path>
                                                      <rect x="388.556" y="60.577" width="158.573" height="224.47" rx="12.641" ry="12.641" fill="#7cc0eb"></rect>
                                                      <rect x="609.866" y="60.577" width="158.573" height="224.47" rx="12.641" ry="12.641" fill="#7cc0eb"></rect>
                                                      <path d="m518.052,92.399h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m435.502,110.95c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m457.607,110.95c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m518.052,133.711h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m518.052,168.924h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m435.502,187.474c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m457.607,187.474c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m518.052,209.055h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m518.052,242.89h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m629.998,96.897c0,2.049,1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71,0-2.049-1.661-3.71-3.71-3.71h-103.884c-2.049,0-3.71,1.661-3.71,3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m722.752,118.23c3.586,0,6.493-2.907,6.493-6.493,0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493c.008,3.582,2.91,6.485,6.493,6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m700.647,118.23c3.586,0,6.493-2.907,6.493-6.493,0-3.586-2.907-6.493-6.493-6.493-3.586,0-6.493,2.907-6.493,6.493.008,3.582,2.91,6.485,6.493,6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m629.998,138.208c0,2.049,1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71,0-2.049-1.661-3.71-3.71-3.71h-103.884c-2.049,0-3.71,1.661-3.71,3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m629.998,173.421c0,2.049,1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71h-103.884c-2.049,0-3.71,1.661-3.71,3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m722.752,194.754c3.586,0,6.493-2.907,6.493-6.493,0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493c.008,3.582,2.91,6.485,6.493,6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m700.647,194.754c3.586,0,6.493-2.907,6.493-6.493s-2.907-6.493-6.493-6.493-6.493,2.907-6.493,6.493c.008,3.582,2.91,6.485,6.493,6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m629.998,213.552c0,2.049,1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71,0-2.049-1.661-3.71-3.71-3.71h-103.884c-2.049,0-3.71,1.661-3.71,3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m629.998,247.388c0,2.049,1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71,0-2.049-1.661-3.71-3.71-3.71h-103.884c-2.049,0-3.71,1.661-3.71,3.71Z" fill="#0c5c8d"></path>
                                                      <rect x="494.785" width="158.573" height="304.523" rx="12.641" ry="12.641" fill="#1e9cd3"></rect>
                                                      <path d="m627.182,41.626h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,78.728h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,115.829h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,152.93h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,190.032h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,227.133h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m627.182,264.235h-103.884c-2.049,0-3.71,1.661-3.71,3.71s1.661,3.71,3.71,3.71h103.884c2.049,0,3.71-1.661,3.71-3.71s-1.661-3.71-3.71-3.71Z" fill="#0c5c8d"></path>
                                                      <path d="m544.631,60.177c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m566.736,60.177c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m596.328,97.338c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.584-.004,6.489-2.909,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m618.426,97.338c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493,6.493-2.907,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m596.328,171.518c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493h0c3.584-.004,6.489-2.909,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m618.426,171.518c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493h0c3.586,0,6.493-2.907,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m596.328,245.684c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m618.426,245.684c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.584-.004,6.489-2.909,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m544.631,135.463c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.584-.004,6.489-2.909,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m566.736,135.463c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.584-.004,6.489-2.909,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m544.631,210.735c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <path d="m566.736,210.735c0-3.586-2.907-6.493-6.493-6.493s-6.493,2.907-6.493,6.493,2.907,6.493,6.493,6.493c3.582-.008,6.485-2.91,6.493-6.493Z" fill="#0c5c8d"></path>
                                                      <rect x="277.01" y="137.172" width="308.817" height="234.37" fill="#7cc0eb"></rect>
                                                      <rect x="276.991" y="137.172" width="308.625" height="42.888" fill="#003963"></rect>
                                                      <path d="m297.539,163.696h21.658c2.09,0,3.784-1.694,3.784-3.784s-1.694-3.784-3.784-3.784h-21.658c-2.09,0-3.784,1.694-3.784,3.784s1.694,3.784,3.784,3.784Z" fill="#1e9cd3"></path>
                                                      <path d="m340.854,163.696h21.658c2.09,0,3.784-1.694,3.784-3.784s-1.694-3.784-3.784-3.784h-21.658c-2.09,0-3.784,1.694-3.784,3.784s1.694,3.784,3.784,3.784Z" fill="#1e9cd3"></path>
                                                      <path d="m384.17,163.696h21.658c2.09,0,3.784-1.694,3.784-3.784s-1.694-3.784-3.784-3.784h-21.658c-2.09,0-3.784,1.694-3.784,3.784s1.694,3.784,3.784,3.784Z" fill="#1e9cd3"></path>
                                                      <circle cx="557.431" cy="159.92" r="7.567" fill="#1e9cd3"></circle>
                                                      <path d="m399.732,311.635c-1.399-.003-2.74-.561-3.728-1.552l-31.681-31.681c-2.061-2.062-2.061-5.404,0-7.466l31.681-31.681c2.026-2.098,5.369-2.156,7.466-.13,2.098,2.026,2.156,5.369.13,7.466-.042.044-.086.087-.13.13l-27.953,27.953,27.953,27.943c2.065,2.059,2.069,5.403.009,7.467-.993.995-2.342,1.554-3.748,1.551Z" fill="#003963"></path>
                                                      <path d="m463.094,311.635c-2.916,0-5.28-2.365-5.279-5.281,0-1.402.558-2.747,1.551-3.737l27.943-27.943-27.943-27.953c-2.026-2.097-1.968-5.44.129-7.466,2.046-1.977,5.291-1.977,7.337,0l31.681,31.681c2.061,2.062,2.061,5.404,0,7.466l-31.681,31.681c-.99.994-2.335,1.552-3.738,1.552Z" fill="#003963"></path>
                                                      <path d="m420.853,311.635c-.568.002-1.131-.091-1.669-.275-2.763-.923-4.256-3.91-3.337-6.674l21.121-63.362c.922-2.767,3.912-4.264,6.679-3.342,2.767.922,4.264,3.912,3.342,6.679l-21.121,63.362c-.719,2.159-2.741,3.614-5.016,3.612Z" fill="#003963"></path>
                                                      <path d="m322.845,316.245c-3.08.153-6.156.283-9.216.395l-.014-.034-22.029-16.929c-7.275-5.591-16.036-5.723-23.394-.353l-23.725,17.316c-3.06-.113-6.136-.242-9.216-.395-17.411-.866-30.992-5.805-30.992,18.061s3.228,62.567,3.228,62.567c0,0-1.937,29.026,31.638,53.537,28.879,21.083,39.812,28.714,39.812,28.714h0s11.155-7.631,40.035-28.714c33.575-24.511,31.638-53.537,31.638-53.537,0,0,3.228-38.701,3.228-62.567,0-23.866-13.581-18.926-30.992-18.061" fill="#ee4b5b"></path>
                                                      <circle cx="279.048" cy="382.541" r="47.111" fill="#c20025"></circle>
                                                      <polyline points="303.712 358.28 303.72 358.279 271.642 406.803 254.376 383.889" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.143"></polyline>
                                                    </g>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="__gradient-wrap">
                                            <div class="__gradient-first-color"></div>
                                            <div class="__gradient"></div>
                                            <div class="__gradient-second-color"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="c29-columns__col c29-columns__col--two-one-third">
                                  <div>
                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                      <div data-component-type="atom" class="at04 aem-GridColumn aem-GridColumn--default--12" data-component-title="Text Bloc">
                                        <div id="atom-732252904" class="at04">
                                          <p>At F5, we believe that <a href="/company/news/features/kara-sprague-executive-vice-president-and-chief-product-officer-at-f5-q-and-a" data-di-id="di-id-f85ea3fa-7c5b2c46">applications and APIs are the most valuable assets of the digital enterprise.</a>Along with being the extractors and refineries of an organizations’ data, they are how digital leaders improve customer and employee engagement, streamline backend operations, and differentiate. We’ve been working with organizations around the world and across industries for more than 25 years to ensure their apps and APIs are secure, available, and performing to their end users’ expectations. As F5’s Chief Product Officer, I’m excited to share how our <a href="/company/news/press-releases/f5-safeguards-digital-services-new-ai-powered-app-api-security" data-di-id="di-id-a750521c-c7bf0d9f">new multi-cloud security solutions</a>can enable <i>your</i>business to thrive in a digital world. <br>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container-1222860099">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at02" data-component-title="Title Bloc">
                          <span></span>
                          <div>
                            <h2 class="at02__title display-3 U:nudge-bot-lg">Today’s digital world: distributed, diverse, and dangerous</h2>
                          </div>
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom-1806703984" class="at04">
                            <p>F5 customers tell us that flexibility in choosing the right environment—a specific public cloud, edge location, or on-premises data center—for each application is important to best serve the needs of the business. However, that flexibility comes at a high price: an exponentially expanding surface area for potential cyberattacks, loss of end-to-end visibility into the health and performance of digital services, and significantly increased operational complexity and cost.</p>
                            <p>Cybercriminals are rushing to capitalize on this alarming opportunity. There’s a breach every 39 seconds and a ransomware attack every 14 seconds, according to Cybersecurity Ventures. <sup>1</sup>&nbsp;In September 2022, criminals accessed nearly 10 million telecom customer records with enough personally identifiable information to open fraudulent bank accounts for each via an unsecured API endpoint. <sup>2</sup>A March 2022 phishing scam enabled North Korean hackers to steal more than $600 million in cryptocurrency from an online game. <sup>3</sup>And that’s just a drop in the bucket of the estimated $6 trillion in damages caused by cybercriminals in 2022 alone. <sup>4</sup>To put that in perspective, measured as a country, cybercrime is the world's third largest economy after the U.S. and China. </p>
                            <p>A little more than a year ago, I discussed <a href="/company/blog/secure-simplify-innovate-charting-a-path-to-adaptive-apps" data-di-id="di-id-f56b75d6-a36bd798">the imperative for organizations to deploy robust application and API security capabilities</a>that enable the management and enforcement of consistent security policies across distributed deployments. That directive is even more urgent and important today as organizations face an ever-expanding attack surface that spans traditional and modern application architectures and multiple clouds, on-prem data centers, and edge sites. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container-1791659884" data-bg-skip="None">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at02" data-component-title="Title Bloc">
                          <span></span>
                          <div>
                            <h2 class="at02__title display-3 U:nudge-bot-lg">Making distributed environments easier to manage and secure</h2>
                          </div>
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom1072657113" class="at04">
                            <p>These distributed environments represent a new normal in our digital world, so it’s critical to mitigate the operational complexity that accompanies them. Let me be clear: multi-cloud networking is not just about connecting clouds at the network and transport layers. Such an approach is operationally complex, can lead to resource contention, and does little to enhance the security of your apps and APIs. A better approach is to adopt a multi-cloud networking solution that spans from the transport layer to the presentation layers, with integrated application security capabilities such as a web app firewall (WAF), API security, bot management, and DDoS protection.</p>
                            <p>A good first step in implementing a comprehensive multi-cloud networking (MCN) solution is reducing the number of components and vendors in your security ecosystem. That may be why 88% of respondents to the 2023 SOAS survey stated that they’re adopting a security platform in place of multiple point solutions. That is also why we are investing heavily in our <a href="/cloud/products/platform-overview" data-di-id="di-id-58a47292-2d194e43">F5 Distributed Cloud Platform</a>, a hybrid and multi-cloud solution built to make it easier to secure, deliver, and optimize traditional and modern apps wherever they’re deployed. </p>
                            <p>
                              <a href="/cloud" data-di-id="di-id-99404d59-dbd852c8">Distributed Cloud Services</a>provide connectivity and security at both the network and application layers. That means that you can securely connect between locations within a single cloud service provider or across different providers, as well as natively connect and secure distributed digital services, giving your end users superior security, availability, and performance while reducing the operational complexity for your business.
                            </p>
                            <p>By using a consistent set of multi-cloud application security and delivery solutions across your application and API portfolio, you can strengthen security, improve performance and resilience, streamline deployments, and unify policies across on-premises, public cloud, and edge environments. Whether you’ve got legacy apps deployed in your data center, hybrid apps connected by APIs, microservices-based apps that rely on distributed Kubernetes clusters, or—as is most likely according to the latest SOAS data—all of the above, we’ve got you covered.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container-557752206" data-bg-skip="None">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at02" data-component-title="Title Bloc">
                          <span></span>
                          <div>
                            <h2 class="at02__title display-3 U:nudge-bot-lg">A more comprehensive solution for multi-cloud networking</h2>
                          </div>
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom1740671291" class="at04">
                            <p>It’s clear that modern digital enterprises need MCN solutions, but not all solutions are created equal. Where other MCN offerings stop at connecting the infrastructure your applications run on, F5 Distributed Cloud Services connect distributed environments—multiple clouds, edge locations, on-premises data centers—as well as the actual applications deployed in them.</p>
                            <h4 class="display-5">Distributed Cloud Services simplify network and app connectivity</h4>
                            <p>Respondents to the 2023 SOAS survey reported that applying consistent security policies is the second most common challenge (after tool and API complexity) of deploying applications in multiple clouds. Two newly available Distributed Cloud SaaS solutions help increase the security of multi-cloud deployments, while improving observability and reducing complexity. <a href="/cloud/products/network-connect" data-di-id="di-id-63bf74a5-dbcf1767">Distributed Cloud Network Connect</a>makes it simple (and secure) to deploy connectivity across cloud locations and cloud providers. Plus, with rich observability capabilities, Network Connect helps administrators quickly identify and resolve potentially disruptive network issues. Higher up the stack beyond the transport layer, <a href="/cloud/products/app-connect" data-di-id="di-id-1b4b016e-5294f674">Distributed Cloud App Connect</a>combines comprehensive app networking and security with faster provisioning and ease of use in a <a href="/cloud/products/distributed-cloud-console" data-di-id="di-id-23c8cd40-be9a7fd3">single, easy-to-use console</a>. </p>
                            <p>F5 is uniquely positioned to make multi-cloud networking easier by connecting and securing any app and API, anywhere—enabling fast network-to-network and workload-to-workload connectivity across different cloud locations, data centers, hybrid environments, and enterprise edge sites.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container1226313763" data-bg-skip="None">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at02" data-component-title="Title Bloc">
                          <span></span>
                          <div>
                            <h2 class="at02__title display-3 U:nudge-bot-lg">Enhancing application security for multi-cloud environments</h2>
                          </div>
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom174637674" class="at04">
                            <p>At F5, we understand that security is about creating a safer digital world for all of us. Our security solutions help you protect what matters most to your business by providing superior efficacy and ease-of-use compared to cloud-native security tools. Plus, we can help you reduce the operational complexity of hybrid and multi-cloud environments by consolidating app delivery and protection and consistently enforcing security policy.</p>
                            <p>This week, we announced several new security capabilities to give you comprehensive protection and control as you manage apps and APIs across on-premises, cloud, and edge locations.</p>
                            <h4 class="display-5">Safeguarding digital services with AI-powered app and API security</h4>
                            <p>F5 offers a comprehensive suite of offerings that deliver robust protection for apps, APIs, and the digital services they power. The new machine-learning-based capabilities of <a href="/cloud/products/api-security" data-di-id="di-id-c19dd74f-e12757fc">Distributed Cloud API Security</a>can help you temper the complexity that respondents to this year’s SOAS survey called their biggest multi-cloud challenge. By incorporating API auto-discovery, policy enforcement, and anomaly detection into our web application and API protection (WAAP) service, F5 boosts API protection while simplifying operations through a single console for both application and API security. We also introduced new AI-driven WAF capabilities, which make it easier to block malicious traffic while reducing the time your security teams spend correcting false positives and enabling legitimate users to seamlessly access your applications. </p>
                            <p>Complexity is simply a reality for organizations as they work to secure their apps and APIs across distributed environments. But you don’t have to do it alone. Respondents to the 2023 SOAS survey told us that one of their primary reasons for adopting Security as a Service (SECaaS) offerings is a lack of personnel with the appropriate skillsets. Our new WAAP managed service offering puts the <a href="/cloud/products/security-operations-center" data-di-id="di-id-653b6868-489fca0b">F5 SOC</a>experts to work for you while ensuring that your critical assets get the WAF, bot defense, and DDoS protection they need across all environments. We’ve also added a portal to enable our service provider partners to custom-design their own managed service offering from F5 Distributed Cloud WAAP solutions. </p>
                            <p>Our <b></b>goal with the Distributed Cloud Platform and the entire F5 portfolio is to help radically simplify the complex task of app and API security in a distributed world—giving you the confidence of comprehensive protection no matter how your apps are built or where they live. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-xl height-1 theme-default theme-wrap" dir="auto" id="container-1997385557">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="atom" class="at02" data-component-title="Title Bloc">
                          <span></span>
                          <div>
                            <h2 class="at02__title display-3 U:nudge-bot-lg">Reducing complexity to help you accelerate innovation</h2>
                          </div>
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom-639997726" class="at04">
                            <p>In this era of&nbsp; <a href="/company/blog/application-capital" data-di-id="di-id-136a93a7-9efb2603">application capital</a>, it’s imperative to ensure that your digital services that drive revenue and customer satisfaction are secure—despite increasing risk from cyberattacks and ever-growing complexity. But you don’t have to reinvent the way you do business to effectively protect your apps and APIs. </p>
                            <p>You shouldn’t have to choose between legacy and modern apps. Between on-premises data centers and cloud or edge locations. Between app performance and app security. With F5, you don’t have to. Our security and multi-cloud networking solutions just work—for legacy and modern apps, in data centers, in the cloud, at the edge, in the architecture you have now, and the ones that will support your business in the years to come.</p>
                            <p>Throughout the constant changes of a fast-moving digital world, F5 remains dedicated to reducing the complexity of securely managing a diverse mix of apps and APIs across on-premises, cloud, and edge locations—enabling you to accelerate innovation with confidence that your most valuable assets are secure.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
                <div data-component-type="atom" class="at04 aem-GridColumn aem-GridColumn--default--12" data-component-title="Text Bloc">
                  <div id="atom1849574386" class="at04 U:padding-bot-xl">
                    <p class="display-5">Learn more about F5’s approach to <a href="/go/solution/hybrid-multi-cloud-security" data-di-id="di-id-697f75ca-7d72491c">app security in a hybrid and multi-cloud world</a>.&nbsp; </p>
                  </div>
                </div>
                <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12" data-component-title="Wrapper Bloc">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap" dir="auto" id="container1742924060" data-bg-skip="None">
                    <div>
                      <div class="content parsys">
                        <div data-component-type="article" class="a12" data-component-title="Article Divider">
                          <hr id="article1237684170" class="a12__hr U:margin-y-md">
                        </div>
                        <div data-component-type="atom" class="at04" data-component-title="Text Bloc">
                          <div id="atom1450107217" class="at04">
                            <p>
                              <small>
                                <sup>1</sup>&nbsp; <a href="https://www.enterpriseappstoday.com/stats/cybersecurity-statistics.html#:~:text=Key%20Cybersecurity%20Statistics%20(Editor%E2%80%99s%20Choice)%201%20The%20cybersecurity,secondsone%20cyber%20attack%20takes%20place%20worldwide.%20More%20items" rel="noreferrer" data-di-id="di-id-89b82553-36986a84">https://www.enterpriseappstoday.com</a>
                              </small>
                            </p>
                            <p>
                              <small>
                                <sup>2</sup>&nbsp; <a href="https://www.theguardian.com/business/2022/oct/01/optus-data-hack-australians-scramble-to-change-passports-and-driver-licences-after-telco-data-debacle" rel="noreferrer" data-di-id="di-id-9b16ca67-307c213d">https://www.theguardian.com</a>
                              </small>
                            </p>
                            <p>
                              <small>
                                <sup>3</sup>&nbsp; <a href="https://www.bbc.com/news/world-asia-61036733" rel="noreferrer" data-di-id="di-id-bc088aaa-92de167">https://www.bbc.com</a>
                              </small>
                            </p>
                            <p>
                              <small>
                                <sup>4</sup>&nbsp; <a href="https://www.enterpriseappstoday.com/stats/cybersecurity-statistics.html#:~:text=Key%20Cybersecurity%20Statistics%20(Editor%E2%80%99s%20Choice)%201%20The%20cybersecurity,secondsone%20cyber%20attack%20takes%20place%20worldwide.%20More%20items" rel="noreferrer" data-di-id="di-id-70ec26da-904afc4d">https://www.enterpriseappstoday.com</a>
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    return htmlStr.trim();
  };
}
