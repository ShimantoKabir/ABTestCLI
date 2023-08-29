const phoneNumberSelector = "ul.header-top-menu>li:first-child>a";
const phoneNumberText = "(888) 547-2227";
const phoneNumberHref = "tel:8885472227";

function runTest() {
  console.log("ID: CC001, VARIATION: 2, VERSION: 1");
  const phoneNumbers = document.querySelectorAll(phoneNumberSelector);

  if (phoneNumbers && phoneNumbers.length > 2) {
    phoneNumbers.forEach((phoneNumber) => {
      if (phoneNumber.classList.contains("text-link-item")) {
        phoneNumber.textContent = "Call Us: " + phoneNumberText;
      }

      if (phoneNumber.classList.contains("mobile-link-item")) {
        phoneNumber.textContent = "Call Us: " + phoneNumberText;
        phoneNumber.setAttribute("href", phoneNumberHref);
      }
    });
  }
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelectorAll(phoneNumberSelector)
  ) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
