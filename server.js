const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    } // Route pages

    res.setHeader('Content-Type', 'text/html');
    // Set header content type as HTML

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    }); // Read the response path files
});

server.listen(3000, 'localhost', () => {
    console.log('Request successful');
}); // Listen to check if request is successful