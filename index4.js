//middleware case

const express = require('express');

const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age)
        resp.send('please provide age');
    else if (req.query.age < 18)
        resp.send('you cant access the page')
    else
        next();
}


app.use(reqFilter);

app.get('/', (req, resp) => {
    resp.send("Welcome to Home Page");
})

app.get('/users', (req, resp) => {
    resp.send('Welcome to Users Page');
})

app.listen(4900);