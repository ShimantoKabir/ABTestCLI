const paQuantity = "select#pa_quantity";
const ulSelector = "ul.wcsatt-options-prompt-radios";

function changeSelection() {
  setTimeout(() => {
    const ul = document.querySelector(ulSelector);
    ul.lastElementChild.firstElementChild.click();
  }, 100);
}

function runTest() {
  console.log("Running....!");
  changeSelection();
  document.querySelector(paQuantity).addEventListener("change", () => {
    changeSelection();
  });
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("select#pa_quantity")
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
