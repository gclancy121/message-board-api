const Comments = require('../comments/commentsModel');

async function validatePayload(req, res, next) {
    const comment = req.body.comment;
    if (comment.trim() === '') {
        res.status(400).json({message: "You have to write a comment in order to post one!"})
        return;
    }
    next();
}

module.exports = {
    validatePayload,
}