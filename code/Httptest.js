//The first web test

let http = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(8888);

console.log("请在浏览器中打开127.0.0.1：8888....");