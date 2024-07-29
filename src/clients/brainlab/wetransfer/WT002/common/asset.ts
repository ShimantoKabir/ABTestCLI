export const selectors = {
  headerWrapper: "div.ui-header__wrapper",
  toggleButton: "button.ui-hamburger-toggle",
  headerLogo: "a.ui-header__logo",
  signUpLink: "section.is-first a",
};

export const triggerEvent = (eventName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};

export const signUpLink: string =
  "https://wetransfer.com/pricing?trk=WT202005_signup";
export const loginLink: string =
  "https://auth.wetransfer.com/login?state=hKFo2SBrekdBYUl1ZGtMNVU4Q1lVWWpadE84RlFEa0ZadmcycaFupWxvZ2luo3RpZNkgZnBMOU11Z3pFcHh3WTNGZktxOHBGMXVlSmxJSjNWb0WjY2lk2SBkWFdGUWppVzFqeFdDRkcwaE9WcHFyazRoOXZHZWFuYw&client=dXWFQjiW1jxWCFG0hOVpqrk4h9vGeanc&protocol=oauth2&audience=aud%3A%2F%2Ftransfer-api-prod.wetransfer%2F&redirect_uri=https%3A%2F%2Fwetransfer.com%2Faccount%2Fcallback%3FfinalizeSSOAuth%3D1%26login%3D1&cache=%5Bobject%20Object%5D&initialScreen=login&lang=en&scope=openid%20profile%20email%20offline_access&response_type=code&response_mode=query&nonce=eVhOVmlHNnlnZHhUZ3NaNHVEa2NwUmJCc2JtWTdodlZOMTlEWjc5dUY3Lg%3D%3D&code_challenge=zc8VfiCaQCdHHovbjdqgwhn_DJN9HC5A9vOaUiNg8Oc&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMyJ9";
