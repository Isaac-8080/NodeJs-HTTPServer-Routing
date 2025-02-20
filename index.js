const http = require("http");

const handleAllRequest = (req, res) => {

  if (req.url === "/" || req.url === "/home") {
    res.write("Welcome to my Node.js Server");
  } else if (req.url === "/about") {
    res.write("This is the About Page");
  } else if (req.url === "/contact") {
    res.write("Contact us at: example@example.com");    
  } else {
    res.write("404 Page Not Found");
  }

  res.end();

}

const server = http.createServer(handleAllRequest);

server.listen(6020, "127.0.0.1", () => {  
  console.log("server is running on post 6020");
})
