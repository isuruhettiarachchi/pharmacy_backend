'use strict';

var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var routes = require('./src/routes/routes')
const CORS = require("cors");
var config = require('./config')

var app = express()

app.use(CORS());

app.use(bodyparser.json())

mongoose.connect(config.db.uri, (err) => {
    if (err) {
        console.log('database err - ', err)
        process.exit(-1)
    }
    console.log('database connected')
})

app.get('/', (req, res) => {
    res.send('Hell World')
})

app.use('/', routes)

app.listen(3001, () => {
    console.log('Server started on port 3001')
})