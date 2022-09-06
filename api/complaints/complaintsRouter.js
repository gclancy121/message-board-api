const router = require('express').Router();
const Complaints = require('./complaintModel');
const {checkPayload} = require('./complaintMiddleware');

router.post('/', checkPayload, (req, res, next) => {
    Complaints.addComplaint(req.body).then(result => {
        res.status(201).json(result);
    }).catch(err => next(err));
})

module.exports = router;