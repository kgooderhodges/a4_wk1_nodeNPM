const http = require('http'); // Like a PHP require

// require is more or less the same as a JS import

// const hostname = '127.0.0.1'; // this is the localhost
const port = process.env.PORT || 3000; // localhost:3000 | double pipe is a way of saying "OR"

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Starbuck is the best dog in the world. Fight me about it.');
});

server.listen(port, () => { // Asking the server to listen and react whenever the site listed below is accessed. Put in hostname with port if using const hostname
    console.log(`Server running at ${port}/`); // ${hostname}: 
}); // Type "node app" in the terminal. Ctrl + C to kill the server running.