function trackGoal(goalName){
	console.log("mbox=", goalName);
	adobe.target.trackEvent({ mbox: goalName });
}

function runTest() {
  const testName = "BLTEST013: Contact form CTA button language";
  const targetURL =
    "https://www.fortis.edu/campuses/florida/cutler-bay/ignite/associate-degree-in-nursing.html";
  const VARIATION = 3;
  const testInfo = "ID: FR003, VARIATION: "+VARIATION+", VERSION: 0.0.9, is running....!";
  console.log(testInfo);

  const variation1Text = "Call Me Today";
  const variation2Text = "Call Me Now";
  const submitMboxName = "submit-button-mbox";
  const pageVisitMboxName = "page-visit-mbox";
  const topApplyClick = "top-apply-click";
  const bottomApplyClick = "bottom-apply-click";

  const buttonTertiarySelector = "button.btn-tertiary";
  const buttonTertiary = document.querySelector(buttonTertiarySelector);

  if (VARIATION === 1) {
    buttonTertiary.textContent = variation1Text;
  } else if(VARIATION === 2) {
    buttonTertiary.textContent = variation2Text;
  }

  buttonTertiary.addEventListener("click", () => {
    trackGoal(submitMboxName);
  });

  const applyLinkSelector = "a.btn-tertiary";
  const applyLinks = document.querySelectorAll(applyLinkSelector);

  applyLinks.forEach((applyLink)=>{
    applyLink.addEventListener("click",()=>{
    	if(applyLink.getBoundingClientRect().top > 420){
    		trackGoal(bottomApplyClick);
    	}else {
    		trackGoal(topApplyClick);
    	}
      trackGoal(pageVisitMboxName);
    })
  })
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("button.btn-tertiary")
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
