//To create file System --> Module
// const fs = require('fs')
// fs.writeFileSync('Hello.txt','Hello created drom fs')


// creating server to get req from browser

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=> {

    const url = req.url
    if(url ==='/'){
    //Response
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<title>HELLO FROM SERVER</title>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Send"></form></body>')
    res.write('</html>')
    return res.end()
    }

    if(url==='/message' && method=='POST'){
        fs.writeFileSync('Hello.text','DUMMY')
        res.setHeader('Location','/')
        res.statusCode = 302;
        return res.end
    }


    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);


     //Response
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<body>HELLO FROM NODE JS RES</body>')
        res.write('</html>')
        res.end()
}).listen(4000)
