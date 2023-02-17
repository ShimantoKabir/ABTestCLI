(() => {
  const jsLocation = "http://localhost:3030/main.js";
  const cssLocation = "http://localhost:3030/main.css";
  const socket = new WebSocket("ws://localhost:3030/ws");
  const fileFetcher = (fileLocation, fileType) => {
    const config = {
      js: {
        id: "echologyx_script",
        htmlTag: "script",
      },
      css: {
        id: "echologyx_style",
        htmlTag: "style",
      },
    };
    fetch(fileLocation)
      .then((response) => {
        return response.text();
      })
      .then((fileData) => {
        const newFile = document.createElement(config[fileType].htmlTag);
        newFile.id = config[fileType].id;
        newFile.textContent = fileData;
        if (fileType === "css") {
          document.querySelector(`#${config[fileType].id}`)?.remove();
          document.querySelector("head").append(newFile);
          return;
        }
        if (
          fileData !== document.querySelector(`#${config[fileType].id}`)?.text
        ) {
          document.querySelector(`#${config[fileType].id}`)?.remove();
          document.querySelector("head").append(newFile);
        }
      })
      .catch(() => {
        console.warn("Something went wrong.", err);
      });
  };
  socket.addEventListener("message", (event) => {
    if (JSON.parse(event.data).type !== "ok") return;
    fileFetcher(jsLocation, "js");
    fileFetcher(cssLocation, "css");
  });
})();
