//The first web test

let http = require("http");

let onRequest = (request, response) => {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    response.write("添加小精灵微信(ershiyidianjian),加入全栈部落");
    response.end();
}
//把函数当作参数传递
http.createServer(onRequest).listen(8000);

console.log("Server has started.");
console.log("请在浏览器中打开 http://127.0.0.1:8888...");