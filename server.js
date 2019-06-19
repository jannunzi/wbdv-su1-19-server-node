var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
require('./models/db');

var app = express()

app.use(bodyParser.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


function sayHello(req, res) {
    res.json({
        message: 'hello world'
    })
}
app.get('/', sayHello)

function addAplusB(req, res) {
    var a = req.params['a'];
    var b = req.params['b'];
    a = parseInt(a);
    b = parseInt(b);
    var c = a + b;
    res.send("a + b = " + c);
}
app.get('/add/:a/:b', addAplusB);

// /login?username=alice&password=alice
function login(req, res) {
    var username = req.query['username']
    var password = req.query['password']
    if(username == 'alice' && password == 'alice') {
        res.send('Hello Alice')
    } else {
        res.send('Sorry, try again')
    }
}

const courses = [
    {
        id: 1,
        title: 'CS5610',
        modules: [
            {
                id: 1,
                title: 'Module 1',
                lessons: [
                    {
                        id: 1,
                        title: 'Lesson ABC'
                    },
                    {
                        id: 2,
                        title: 'Lesson XYZ'
                    }
                ]
            }
        ]
    }
]

app.get('/api/courses', function (req, res) {
    res.json(courses);
})

app.get('/login', login);

const setAttribute = (req, res) => {
    const key = req.params['key']
    const value = req.params['value']
    req.session[key] = value;
    res.send(key + " = " + value);
}
const getAttribute = (req, res) => {
    const key = req.params['key']
    value = req.session[key];
    res.send(value);
}
app.get('/api/session/set/:key/:value', setAttribute)
app.get('/api/session/get/:key', getAttribute)

const authentication = require('./controllers/authentication.controller.server');
authentication(app)

require('./controllers/WebsiteController')(app)
require('./controllers/PageController')(app)


// require("./controllers/page.controller.server")(app);
// require("./controllers/later/WebsiteController")(app);
// require("./controllers/later/PageController")(app);
app.listen(3000)
