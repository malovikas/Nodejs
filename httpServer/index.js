const http_server = require('http');
const fs = require('fs');

const server = http_server.createServer((req, res) => {

    const data=fs.readFileSync(`${__dirname}/UserApi/api.json`, "utf-8")
    const orgData = JSON.parse(data)

    //console.log(req.url);// for routing
    if (req.url == '/') {
        res.end('Hello !!!! this server is working');
    }
    else if (req.url == '/contact') {

        res.end();
    }
    else if (req.url == '/userapi') {
        //read the api file
        /* fs.readFile(`${__dirname}/UserApi/api.json`, "utf-8", (err, data) => {
            const orgData = JSON.parse(data)
            console.log(data)
            res.end(orgData[1].name);
        }) */
        res.writeHead(200,{'content-type':'application/json'})
        res.end(orgData[1].name);

    }
    else {
        res.writeHead(404) // for content head error
        res.end('!!!!!!!!!ERROR!!!!!!!!!')
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to the port no 8000')
});