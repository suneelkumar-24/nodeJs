const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'Suneel kumar',
        email: 'suneelkumar@gmail.com',
        city: 'karachi',
        skills: ['php', 'js', 'node', 'laravel']
    }
    res.render('profile', { user });
})


app.get('/login', (req, res) => {
        res.render('login');
    })
    // console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);