// http module included with node.  No need to install.
const http = require('http');

const server = http.createServer(
  (req, res) => {
    // Destructure from req
    const { headers, url, method } = req;
    console.log(headers, url, method);

    res.end();
  }
);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));