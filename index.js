const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write('<h1>Hello this is suneel</h1>');
//     resp.end();
// }).listen(4500);

function dataControl(req,resp)
{
    resp.write('<h1>Hello,, this is suneel</h1>');
    resp.end();
}
http.createServer(dataControl).listen(4500);







// const arr = [2,4,7,1,3,8,3];

// let result = arr.filter((item)=>{
//     return item>=4
// })
// console.log(result)