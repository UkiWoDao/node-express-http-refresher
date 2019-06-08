const http = require('http'),
      fs = require('fs'); // access local file system

const server = http.createServer((req, res) =>{
    console.log('A request has been made to ' + req.url);
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        const homePageHTML = fs.readFileSync('index.html');
        res.write(homePageHTML); // not the file itself, only the content
        res.end();
    } else if(req.url === '/nodejs.png'){
        res.writeHead(200, {'content-type':'image/png'});
        const image = fs.readFileSync('nodejs.png');
        res.write(image);
        res.end();
    }else if(req.url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'});
        const css = fs.readFileSync('style.css');
        res.write(css);
        res.end();
    }else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write('Non existing route');
        res.end();
    }
});

server.listen(3000);