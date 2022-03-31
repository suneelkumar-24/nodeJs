//route level middleware case

const express = require('express');
const route = express.Router();

const reqFilter = require('./middleware')

const app = express();

route.use(reqFilter);

// app.use(reqFilter);



app.get('/', (req, resp) => {
    resp.send("Welcome to Home Page");
})

app.get('/users', reqFilter, (req, resp) => {
    resp.send('Welcome to Users Page');
})

app.get('/about', (req, resp) => {
    resp.send('Welcome to about Page');
})

route.get('/contact', (req, resp) => {
    resp.send('Welcome to contact Page');
})

route.get('/profile', (req, resp) => {
    resp.send('Welcome to profile Page');
})

app.use('/', route);

app.listen(4900);