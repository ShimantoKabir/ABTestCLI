export class Loader<T extends HTMLScriptElement | HTMLStyleElement> {
  load = (srcLink: string, id: string, tagName: string) => {
    const tag = document.createElement(tagName);

    tagName === "script"
      ? tag.setAttribute("src", srcLink)
      : tag.setAttribute("href", srcLink);

    tagName === "link" && tag.setAttribute("rel", "stylesheet");

    tag.setAttribute("id", id);

    document.head.appendChild(tag);

    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        const element: null | T = document.querySelector<T>(`${tagName}#` + id);

        if (element) {
          resolve(element);
        } else {
          reject(null);
        }
      }, 1000);
    });
  };
}
