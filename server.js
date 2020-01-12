const express = require("express");
//console.log(express)
const app = express();
const morgan = require("morgan");
var bodyParser = require('body-parser')
const NodecontactRoute = require("./api/router/Contact")
const project_router = require("./api/router/project_router")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_back_db', { useNewUrlParser: true });
//mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log("Established database connection")
})
//extended feture i dont wanted
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//const contactRouter = require("./api/router/Contact");

app.use("/", function (req, res, next) {
    //console.log("i am middleware function")
    next();
})
//morgan help to see whats time need to send request server
app.use(morgan("dev"))
//we want to see it in developement mode


//app.use("/api/node_contacts", NodecontactRoute);
app.use("/api/shorturl/new", project_router)

var html_file = __dirname + "/index.html"
app.get("/hola", function (req, res) {
    res.sendfile(html_file)
})




















const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`The server is running on ${PORT}`)
})