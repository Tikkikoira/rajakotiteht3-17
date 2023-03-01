require ("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const arviointiRouter = require('./routes/arviointi');
const opintojaksoRouter = require('./routes/opintojakso')
const opiskelijaRouter = require('./routes/opiskelija')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/arviointi', arviointiRouter);
app.use('/opintojakso', opintojaksoRouter)
app.use('/opiskelija', opiskelijaRouter)

console.log(process.env.USERNAME)
module.exports = app;
