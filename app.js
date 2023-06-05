const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1> <a href="/about">About Page</a> <a href="/contact">Contact Page</a> <a href="/error">Error Page</a>')
        res.end()
        return;
    }
    else {
        res.end(`<h1>Oops!</h1> <p>We can't seem to find the page you are looking for</p> <a href="/">back home</a>`)
    }
})

server.listen(5000, () => {
    console.log("Server is listening on port 5000")
})

