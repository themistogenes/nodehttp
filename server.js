// http module included with node.  No need to install.
const http = require('http');

const server = http.createServer(
  (req, res) => {
    // Destructure from req
    // const { headers, url, method } = req;
    // console.log(headers, url, method);

    // Set Content-Type in Header to text/plain
    // res.setHeader('Content-Type', 'text/plain');
    // Return text
    // res.write('hello');

    // Set Content-Type in Header to text/html
    // res.setHeader('Content-Type', 'text/html');
    // Return html
    // res.write('<h1>Hello</h1>');

    // Set Content-Type in Header to application/json
    res.setHeader('Content-Type', 'application/json');

    // Specify the technology running on the server
    res.setHeader('X-Powered-By', 'Node.js');

    res.end();
  }
);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));