const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// middleware
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
const userRoutes = require('./api/routes/users');
const medRecRoutes = require('./api/routes/medrecs');
const stateIdRoutes = require('./api/routes/stateids');

// hand-offs
app.use('/users', userRoutes);
app.use('/medrecs', medRecRoutes);
app.use('/stateids', stateIdRoutes);

mongoose.connect(
    `mongodb+srv://wmuser:${process.env.dbPW}@cluster0-ug3yf.mongodb.net/test?retryWrites=true`
    , { useNewUrlParser: true });

// catch any unrouted
app.use('/',(req, res, next)=>{
    const error = new Error('Invalid Path');
    error.status = (404);
    next(error);
});

// errors caused by anything (even non-route related)
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;