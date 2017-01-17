var express = require('express');
const add = require('./add');
const app = express();
app.use('/add', add);

app.get('/test', function (req, res, next) {
    res.render('index', {title: 'Hello Alan, this is a new page for testing'})
});

module.exports = app;