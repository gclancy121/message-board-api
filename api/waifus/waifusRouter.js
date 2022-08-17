//returning the waifus as a dataset
const express = require('express');
const Waifu = require('./waifuModel');
const {checkPayloadValid, checkWaifuAlreadyExists} = require('./waifuMiddleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Waifu.fetchData().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.post('/', checkPayloadValid, checkWaifuAlreadyExists, (req, res, next) => {
    Waifu.addData(req.body).then(result => {
        res.status(201).json(result);
    })
})


module.exports = router;