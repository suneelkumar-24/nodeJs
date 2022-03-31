const express = require("express");
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    let result =await dbConnect();
    result = await result.find().toArray();
    console.log();
    resp.send(result)
})


app.post('/', async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(req.body);
})



app.listen(4900);