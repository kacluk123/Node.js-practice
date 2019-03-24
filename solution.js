const http = require('http');
const userList = [
    "john",
    "mike",
    "alex",
]
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write('<html>')
        res.write('Hello dude')
        res.write(`<ul>${userList.map(user => res.write(`<li>${user}</li>`))}</ul>`)
        res.write('<form action="/create-user" method="POST"><input name="message" type="text"><button type="submit">Send</button></form>');
        res.write('</html>')
        return res.end();
    }

    if(url === "/create-user" && method === "POST"){
        const body = [];
        req.on('data', (chunk)=>{
           body.push(chunk);
         }) 

         return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            if(message === "siemka"){
                res.write('<html>')
                res.write(`<span>Hello ${message}</span>`)
                res.write('</html>')
            } else {
                res.write('<html>')
                res.write(`<span> Wrong password </span>`)
                res.write('</html>')
            }
            return res.end()
         })
        
    }


})


server.listen(4444);