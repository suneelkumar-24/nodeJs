
const {MongoClient} = require('mongodb');
url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function dbConnect ()
{
    let connect = await client.connect();
    let db = connect.db(database);
    return  db.collection('products');
}

module.exports = dbConnect;