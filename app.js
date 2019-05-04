const express = require('express');
const app = express();

const userRoutes = require('./api/routes/users');
const medRecRoutes = require('./api/routes/medrecs');
const stateIdRoutes = require('./api/routes/stateids');

app.use('/users', userRoutes);
app.use('/medrecs', medRecRoutes);
app.use('/stateids', stateIdRoutes);

app.use('/',(req, res, next)=>{
    res.status(200).json({
        message: "collect all route"
    });
});

module.exports = app;