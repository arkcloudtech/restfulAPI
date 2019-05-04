const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));

// routes
const userRoutes = require('./api/routes/users');
const medRecRoutes = require('./api/routes/medrecs');
const stateIdRoutes = require('./api/routes/stateids');

// hand-offs
app.use('/users', userRoutes);
app.use('/medrecs', medRecRoutes);
app.use('/stateids', stateIdRoutes);

// catch any unrouted
app.use((req, res, next)=>{
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