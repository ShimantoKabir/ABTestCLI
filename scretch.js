function trigger(activate, options) {
  var utils = window.optimizely.get("utils");

  if (
    window.location.href.indexOf(
      "https://www.graberblinds.com/find-an-expert"
    ) !== -1
  ) {
    utils
      .waitForElement("button.o-form__submit")
      .then(function (buttonElement) {
        buttonElement.addEventListener("click", function () {
          options.isActive && activate({ isActive: false });
          activate();
        });
      });
  }
}
