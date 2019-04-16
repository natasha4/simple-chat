var express = require('express')
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3001;

var app = express()
app.use(bodyParser.json())

var messagesList = [];
var usersList = [];

app.use(function (req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next() 
})

app.route('/message')
    .get(function (req, res) {
        console.log("Get Message List")
        res.json(messagesList)
    })
    .post(function (req, res) {
        console.log(`Post Message from ${req.body.from} '${req.body.message}' `)
        messagesList.push({ message: req.body.message, from: req.body.from })
        res.json(messagesList)
    })

app.route('/user')
    .get(function (req, res) {
        console.log("Get User List")
        res.json(usersList)
    })
    .post(function (req, res) {
        console.log(`Post User: ${req.body.userName}`)
        usersList.push(req.body.userName)
        res.json(usersList)
    })

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))