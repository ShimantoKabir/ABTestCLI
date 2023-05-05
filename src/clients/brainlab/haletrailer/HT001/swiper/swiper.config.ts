export const addCssToPage = (href: string, id: string) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const c = document.createElement("link");
  c.setAttribute("id", id);
  c.setAttribute("rel", "stylesheet");

  c.href = href;
  document.head.appendChild(c);
};

export const addJsToPage = (src: string, id: string) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const s = document.createElement("script");

  s.src = src;
  s.setAttribute("id", id);
  document.head.appendChild(s);
};
