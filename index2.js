const fs = require('fs');
const path = require('path');



const dirPath = path.join(__dirname,'files');
console.warn(dirPath);

// for (i=0; i<5; i++)
// {
//     fs.writeFileSync(dirPath+"/apple"+i+".txt",'this is a fruit')
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     })
// });
// fs.writeFileSync('apple.txt','this is a fruit');


let a =10;
let b=0;



let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)
})

waitingData.then((data)=>{
console.log(a+data);
})
