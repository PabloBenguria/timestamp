'use strict';

const express = require('express');
const server = require('./http/server');

const app = express();
app.PORT = process.env.PORT || 8089;

server.init(app);


