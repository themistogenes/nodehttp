// http module included with node.  No need to install.
const http = require('http');

// Mock Data
const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' }
]

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
    // res.setHeader('Content-Type', 'application/json');

    // Specify the technology running on the server
    // res.setHeader('X-Powered-By', 'Node.js');

    // End the response
    // res.end();

    // End the response and include single json object
    // res.end(
    //   JSON.stringify({
    //     success: true,
    //     data: todos
    // }))

    // Send back a status code for Not Found
    // res.statusCode = 404;

    // Send back status code and Content-Type, etc at the same time
    res.writeHead(
      404,
      {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
      }
    )

    res.end(
      JSON.stringify({
        success: false,
        error: 'Not Found',
        data: null
      })
    )
  }
);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));