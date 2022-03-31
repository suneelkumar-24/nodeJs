const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {name:"Y20"},
        {$set:{name:"Y2027"}}
    )
    console.warn(result);
}

updateData();