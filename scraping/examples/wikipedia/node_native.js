import https from "node:https";

const request = https.request(
  {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/World_Wide_Web",
    method: "GET",
  },
  (result) => {
    let html = "";

    result.on("data", (dataBuffer) => {
      const partialHTML = dataBuffer.toString();
      html += partialHTML;
    });

    result.on("end", () => {
      // DO SOMETHING WITH THE HTML STRING
      console.log(html);
    });
  }
);

request.on("error", (error) => {
  console.error(error);
});

request.end();
