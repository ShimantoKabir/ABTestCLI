const phoneNumberSelector = "a.css-opyw1p";
const phoneNumberText = "(888) 547-2227";
const phoneNumberHref = "tel:8885472227";

function runTest() {
  console.log("ID: CC001, VARIATION: 2, VERSION: 1");
  const phoneNumber = document.querySelector(phoneNumberSelector);

  if (phoneNumber) {
    phoneNumber.textContent = phoneNumberText;
    phoneNumber.setAttribute("href", phoneNumberHref);
  }
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector(phoneNumberSelector)
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
