const ROOMS = [
    {
        "number": 101,
        "category": "SNG",
        "status": 1
    },
    {
        "number": 102,
        "category": "SNG",
        "status": 1
    },
    {
        "number": 103,
        "category": "SNG",
        "status": 5
    },
    {
        "number": 123,
        "category": "SUP",
        "status": 5
    },
    {
        "number": 201,
        "category": "DBL",
        "status": 5
    }
]

const adminUser = {
    username: "admin",
    firstName: "ad",
    lastName: "min",
    password: "admin"
}

const crocchiUser = {
    username: "crocchi",
    firstName: "Croc",
    lastName: "Chi",
    password: "Cro6969$"
}

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cors())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/rooms/', (req, res) => {
    res.status(200).send(ROOMS)
    console.log(`[GET] '/api/rooms/`)
})

app.post('/api-auth/login/', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const response = {
        status: 403,
        body: `Unauthorized access ${username}.... DENIED!`
    }
    
    if  (username === adminUser.username && password === adminUser.password ) {
        response.status = 200
        response.body = adminUser
        console.log(`[ADMIN] ${username} has succesfully logged in.`)
    }
    if  (username === crocchiUser.username && password === crocchiUser.password ) {
        response.status = 200
        response.body = crocchiUser
        console.log(`[LOTA] ${username} fatt nu gireeeett`)
    }
    return res.status(response.status).send(response.body)
})

app.post('/api-auth/logout/', (req, res) => {
    res.status(200).send("LOGGED OUT")
})

app.listen(port, () => {
    console.log(`Test API listening on localhost:${port}`)
})