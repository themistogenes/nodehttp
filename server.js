const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' }
]

const server = http.createServer(
  (req, res) => {

    const { method, url } = req;

    let body = [];

    req
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();

        // set default status to Not Found
        let status = 404;

        // set default response
        const response = {
          success: false,
          data: null,
          error: null
        }

        if (method === 'GET' && url === '/todos') {
          status = 200;
          response.success = true;
          response.data = todos;
        } else if (method === 'POST' && url === '/todos') {
          const { id, text } = JSON.parse(body);

          if (!id || !text) {
            status = 400;
            response.error = 'ID and text are required';
          } else {
            todos.push({ id, text});
            status = 201;
            response.success = true;
            response.data = todos;
          }
        }

        res.writeHead(
          status,
          {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
          }
        )

        res.end(
          JSON.stringify(response)
        )
      })

  }
);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));