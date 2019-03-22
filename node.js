const http = require('http');

function rqListener(req, res) {
    console.log(req)
    console.log('elo')
};

const myServer = http.createServer(rqListener);

myServer.listen(3000);


