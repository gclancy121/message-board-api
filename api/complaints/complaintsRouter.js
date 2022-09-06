const router = require('express').Router();
const Complaints = require('./complaintModel');

router.post('/', (req, res, next) => {
    Complaints.addComplaint(req.body).then(result => {
        res.status(201).json(result);
    }).catch(err => next(err));
})

module.exports = router;