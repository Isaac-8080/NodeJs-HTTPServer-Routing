const http = require("http");

const contentTypeHeader = { "Content-Type": "text/html" };

const handleAllRequest = (req, res) => {

  console.log(`Request received: ${req.url}`);

  res.writeHead(200, contentTypeHeader);

  if (req.url === "/" || req.url === "/home") {
    res.write("<h1>Welcome to my Node.js Server</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>This is the About Page</h1>");
  } else if (req.url === "/contact") {
    res.write("<h1>Contact us at: example@example.com</h1>");
  } else if (req.url === "/services") {
    res.write("<h1>We offer Web Development and Mobile App Development services</h1>");
  } else if (req.url === "/time") {
    res.write(`<h1>${new Date().toLocaleString()}</h1>`);
  } else {
    res.writeHead(404, contentTypeHeader);
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
};

const server = http.createServer(handleAllRequest);

server.listen(6020, () => {
  console.log("Server is running on port 6020");
});
