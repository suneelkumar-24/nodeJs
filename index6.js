const dbConnect = require('./mongodb')



// dbConnect().then((resp)=>{
//     resp.find({name:"y20"}).toArray().then((data)=>{
//         console.log(data);
//     });
// });


//another way to handle this situation


const main = async ()=>{
    let data = await dbConnect();
    console.log(data);

    data =await data.find().toArray();
    console.warn(data);

}

main();
// console.log(getData());