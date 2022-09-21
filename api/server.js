//Server 
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Routers
const waifuRouter = require('./waifus/waifusRouter');
const usersRouter = require('./users/usersRouter');
const complaintsRouter = require('./complaints/complaintsRouter');
const postsRouter = require('./posts/postsRouter');

//Server setup
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());


//Server router use
server.use('/users', usersRouter);
server.use('/waifus', waifuRouter);
server.use('/complaints', complaintsRouter);
server.use('/posts', postsRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack});
});

module.exports = server;