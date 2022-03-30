const http = require('http');

const data = require('./data');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);

// function dataControl(req,resp)
// {
//     resp.write('<h1>Hello,, This is Mr. suneel</h1>');
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);







// const arr = [2,4,7,1,3,8,3];

// let result = arr.filter((item)=>{
//     return item>=4
// })
// console.log(result)