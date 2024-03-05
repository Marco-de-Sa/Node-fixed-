"use strict";

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>",
  "/code" : "<h1>this is a test page made with spit, prayers and elbow grease</h1>\n<p>this is a paragraph to test if this works as I intend it to work</p>\n<p>merck toch hoe sterck</p>"
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    if (routeResponseMap[req.url]) {
      res.end(routeResponseMap[req.url]);
    } else {
      res.end("<h1>Welcome!</h1>");
    }
  });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
