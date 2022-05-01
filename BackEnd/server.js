const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require("mysql")
const cookieParser = require('cookie-parser')
const session = require('express-session')

//Serves files from React app
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//cores options for cookies, remembers the logged in user (this is just declaration)
const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

//setting up a session with a scret, if website is live important to keep safe
//users will stay logged in for 2 hours
app.use(session({
    key: "userId",
    secret: "donalsupercalifragilisticexpialidociousdylanprojectbudgetbuddy",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60* 60* 2,
    }
}))

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//connect to MYSQL database on localhost (editpassword if needed)
const db= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "userlogin",
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Register Functionality Reaching out to Frontend
app.post('/register', (req, res) =>{

    const username = req.body.username
    const password = req.body.password

    db.query(
        "INSERT INTO user (username, password) VALUES (?,?)", 
        [username, password],
        (err, result) => {
        console.log(err);
    }
    );
});

//Login functionality (checking in cookies are there)
app.get("/login", (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})
//loggin in a new user
app.post('/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM user WHERE username = ? AND password = ?", 
        [username, password],
        (err, result) => {
            if(err){
                res.send({err: err})
            }
            
            if (result.length > 0){
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
            }
            else{
                res.send({message: "Wrong Username or Password"});
            }
            }
    );
})

//running node server.js on port delcared above
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})