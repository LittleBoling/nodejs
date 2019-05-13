//node development server blocking 
'use strict';
// V8 have 3 different rank non-support、support and strict

const http =  require('http');
 
let count = 0;

const server = http.createServer((request,response) => {
    response.write(`Your visit index is ${count++}`);
    response.end();
});


server.listen(2080,(error) => {
    if(error)
        throw error;
    console.log('Starting Web service successfully,port:2080');
});

