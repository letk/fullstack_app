const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb+srv://sufer:<mesPi8Zl>@testcluster-r3hla.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('conntect do the database'));

db.on('error', () => console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));