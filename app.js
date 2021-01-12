const http = require('http'); // Like a PHP require

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is the localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Starbuck is the best dog in the world. Fight me about it.');
});

server.listen(port, hostname, () => { // Asking the server to listen and react whenever the site listed below is accessed
    console.log(`Server running at http://${hostname}:${port}/`);
}); // Type "node app" in the terminal. Ctrl + C to kill the server running.