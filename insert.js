const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = db.insert(
        [
            { name: 'hot 8', brand: "infinix", price: 300, category: "mobile" }
        ]
    )
    // console.log('insert functoin');
}

insert();