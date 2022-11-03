const router = require('express').Router();
const Comments = require('./commentsModel');
const {validatePayload} = require('./commentsMiddleware');

router.post('/', validatePayload, (req, res, next) => {
    Comments.addComment(req.body).then(result => {
        res.status(201).json(result);
    }).catch(err => next(err));
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Comments.fetchAllCommentsOnPost(id).then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

module.exports = router;