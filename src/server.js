const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const jquery = require('jquery')

let app = express()
app.use(cors())
app.use(bodyParser.json())

var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./serviceAcctKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://campust-f7265.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
let db = admin.database();
let ref = db.ref("pinterest");
let cat = db.ref('cats');
let catRef = cat.child("claws");
catRef.once("value", function(snapshot) {

    var pinRef = ref.child("pins");

    //send both requests at once, load into db
    //parse json using body parser
    const https = require('https');

    let token1; //grab value from db

    let pinUrl = "https://api.pinterest.com/v1/me/pins/?access_token=" + token1 + "&fields=link%2Curl%2Cboard%2Ccounts%2Cmedia%2Coriginal_link%2Ccreator"

    let userUrl = "https://api.pinterest.com/v1/me/pins/?access_token=" + token1 + "";


    const reqPin = https.request(pinUrl, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);

        var data = '';

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(data);
            let dataArr = obj.data

            dataArr.map(function(i, e) {

                let image = i.image.original.url
                let boardUrl = i.board.url
                let boardName = i.board.name
                let repins = i.counts.saves
                let originalLink = i.original_link
                let url = i.url

                pinRef.set({
                    image: image,
                    boardUrl: boardUrl,
                    boardName: boardName,
                    repins: repins,
                    originalLink: originalLink,
                    url: url,
                });

            })

        })


    });
    const reqUser = https.request(userUrl, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);

        var data = '';

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(data);
            let dataArr = obj.data

            dataArr.map(function(i, e) {

                let image = i.image.original.url
                let boardUrl = i.board.url
                let boardName = i.board.name
                let repins = i.counts.saves
                let originalLink = i.original_link
                let url = i.url

                pinRef.set({
                    image: image,
                    boardUrl: boardUrl,
                    boardName: boardName,
                    repins: repins,
                    originalLink: originalLink,
                    url: url,
                });

            })

        })


    });

    reqPin.on('error', (e) => {
        console.error(e);
    });
    reqPin.end();

    reqUser.on('error', (e) => {
        console.error(e);
    });
    reqUser.end();

});

// const options = {
//     protocol: 'https',
//     // hostname: 'api.pinterest.com',
//     port: 443,
//     // path: 'v1/me/pins/?access_token=Ap8fqzeLErpC5Fb091sSDVNBj6v-FXzWDnK_WFJFkamNVqBntQakwDAAAHpHRZGp4bxgYG0AAAAA&fields=link%2Curl%2Cboard%2Ccounts%2Cmedia%2Coriginal_link%2Ccreator',
//     method: 'POST'
// };


// For ease of this tutorial, we are going to use SQLite to limit dependencies
// let database = new Sequelize({
//     dialect: 'sqlite',
//     storage: './test.sqlite'
// })

// // Define our Post model
// // id, createdAt, and updatedAt are added by sequelize automatically
// let Post = database.define('posts', {
//     title: Sequelize.STRING,
//     body: Sequelize.TEXT
// })

// // Initialize epilogue
// epilogue.initialize({
//     app: app,
//     sequelize: database
// })

// // Create the dynamic REST resource for our Post model
// let userResource = epilogue.resource({
//     model: Post,
//     endpoints: ['/posts', '/posts/:id']
// })

// // Resets the database and launches the express app on :8081
// database
//     .sync({ force: true })
//     .then(() => {
//         app.listen(8081, () => {
//             console.log('listening to port localhost:8081')
//         })
//     })