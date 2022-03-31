const dbConnect = require('./mongodb');

const deleteData =async ()=>{
    let db = await dbConnect();
    let result =await db.deleteOne(
        {
            name:"hot 8"
        }
    )
    console.warn(result)
}

deleteData();