const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

//Serves files from React app
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.4b2eg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    Amount:Float,
    Category:String,
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})