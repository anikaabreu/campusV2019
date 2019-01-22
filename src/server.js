const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const dotenv = require('dotenv').config()
const app_key = VUE_APP_KEY
if (dotenv.error) {
  throw dotenv.error
}

console.log(dotenv.parsed)

let app = express()
app.use(cors())
app.use(bodyParser.json())


// SQLite

let database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite'
})

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let Post = database.define('posts', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
})

// Initialize epilogue
epilogue.initialize({
    app: app,
    sequelize: database
})

// Create the dynamic REST resource for our Post model
let userResource = epilogue.resource({
    model: Post,
    endpoints: ['/posts', '/posts/:id']
})

// Resets the database and launches the express app on :8081
database
    .sync({ force: true })
    .then(() => {
        app.listen(8081, () => {
            console.log('listening to port localhost:8081')
        
        })
    })