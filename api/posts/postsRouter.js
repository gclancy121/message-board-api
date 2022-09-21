const router = require('express').Router();
const Posts = require('./postsModel');

router.get('/', (req, res, next) => {
    Posts.fetchPosts().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.post('/addpost', (req, res, next) => {
    Posts.addPost(req.body).then(result => {
        res.status(201).json({message: "Post creation successful", post_info: result});
    }).catch(err => next(err));
})

module.exports = router;