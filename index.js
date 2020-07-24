const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

const {config} = require('./config/config');
const {mongoose} = require('./db');
const {passportConfig} = require('./config/passportConfig');

let todoController = require('./controllers/todo.controller');
let userController = require('./controllers/user.controller');

let app = express();
// save images here
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
app.use(express.json());
// added Limit, because base64 image has problems
app.use(bodyParser.json({limit: '20mb'}));
//fixing CORS problem
app.use(cors({origin: 'http://localhost:3000'}));
app.use(passport.initialize());

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


app.use('/auth', userController);
app.use('/todos', todoController);

// Production Deploy
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

// base error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(400).json({status: false, message: valErrors});
    }
});
