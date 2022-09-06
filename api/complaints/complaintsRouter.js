const router = require('express').Router();
const Complaints = require('./complaintModel');

router.post('/', (req, res, next) => {
    Complaints.addComplaint(req.body).then(result => {
        res.status(201).json(result);
    })
})

module.exports = router;