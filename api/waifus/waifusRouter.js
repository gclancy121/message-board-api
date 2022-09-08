//returning the waifus as a dataset
const express = require('express');
const Waifu = require('./waifuModel');
const {checkPayloadValid, checkWaifuAlreadyExists, checkSearchExists} = require('./waifuMiddleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Waifu.fetchData().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.get('/:name', checkSearchExists, (req, res, next) => {
    const name = req.params.name
    Waifu.findByNameArray(name).then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.get('/id/:id', (req, res, next) => {
   const id = req.params.id;
   Waifu.findById(id).then(result => {
    res.status(200).json(result);
   }).catch(err => next(err));
    
})

router.post('/', checkPayloadValid, checkWaifuAlreadyExists, (req, res, next) => {
    Waifu.addData(req.body).then(result => {
        res.status(201).json(result);
    }).catch(err => next(err));
})


module.exports = router;