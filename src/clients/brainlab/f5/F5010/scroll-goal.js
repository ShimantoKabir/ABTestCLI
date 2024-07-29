function triggerGoal(percentage) {
  const mbox = percentage + "-percentage-scrolled";
  console.log("mbox=", mbox);
  adobe.target.trackEvent({ mbox: mbox });
}

$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();
  const documentHeight = $(document).height();
  const windowHeight = $(window).height();

  let is25percentScrolled = false;
  let is50percentScrolled = false;
  let is75percentScrolled = false;
  let is100percentScrolled = false;

  const scrollPercent = Math.ceil(
    (scrollTop / (documentHeight - windowHeight)) * 100
  );

  if (scrollPercent > 25 && !is25percentScrolled) {
    triggerGoal(25);
    is25percentScrolled = true;
  } else if (scrollPercent > 50 && !is50percentScrolled) {
    triggerGoal(50);
    is50percentScrolled = true;
  } else if (scrollPercent === 75 && !is75percentScrolled) {
    triggerGoal(75);
    is75percentScrolled = true;
  } else if (scrollPercent === 100 && !is100percentScrolled) {
    triggerGoal(100);
    is100percentScrolled = true;
  } else if (scrollPercent < 20) {
    is25percentScrolled = false;
    is50percentScrolled = false;
    is75percentScrolled = false;
    is100percentScrolled = false;
  }
});
