function trigger(activate, options) {
  var utils = window.optimizely.get("utils");
  var desktopHoverElm = "nav.main-nav>ul>li.primary-item-window-treatments";
  var mobileHoverElm = "button.nav-mobile";

  if (window.location.href.indexOf("https://www.graberblinds.com") !== -1) {
    utils.waitForElement(desktopHoverElm).then((desktopHoverElm) => {
      desktopHoverElm.addEventListener("mouseenter", function () {
        options.isActive && activate({ isActive: false });
        activate();
      });
    });

    utils.waitForElement(mobileHoverElm).then((mobileHoverElm) => {
      mobileHoverElm.addEventListener("click", function () {
        options.isActive && activate({ isActive: false });
        activate();
      });
    });
  }
}
