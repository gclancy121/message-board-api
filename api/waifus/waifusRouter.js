const router = require('express').Router();
const waifus = require('./waifuData');

router.get('/', (req, res) => {
    res.status(200).json(waifus);
})

module.exports = router;