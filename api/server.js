const express = require('express');
const helmet = require('helmet');

const restricted = require('./auth/restricted');

const waifuRouter = require('./waifus/waifusRouter');
const authRouter = require('./auth/authRouter');

const server = express();
server.use(helmet());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/waifus', restricted, waifuRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack});
});

module.exports = server;