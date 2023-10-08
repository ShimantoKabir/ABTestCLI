export class Loader<T extends HTMLScriptElement | HTMLStyleElement> {
  load = (srcLink: string, id: string, tagName: string) => {
    const tag = document.createElement(tagName);
    tag.setAttribute("src", srcLink);
    tag.setAttribute("id", id);
    document.head.appendChild(tag);

    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        const scriptElement: null | T = document.querySelector<T>(
          "script#" + id
        );

        if (scriptElement) {
          resolve(scriptElement);
        } else {
          reject(null);
        }
      }, 1000);
    });
  };
}
