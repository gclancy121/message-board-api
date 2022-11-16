const router = require('express').Router();
const Posts = require('./postsModel');

router.get('/', (req, res, next) => {
    Posts.fetchPosts().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.get('/post-num/:id', (req, res, next) => {
    const id = req.params.id;
    Posts.findAllPostsByUser(id).then(result => {
        res.status(200).json({message: 'Post fetching successful', user_post_num: result.length});
    }).catch(err => next(err));
})

router.get('/:post_id', (req, res, next) => {
    const post_id = req.params.post_id;
    Posts.findById(post_id).then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.post('/addpost', (req, res, next) => {
    Posts.addPost(req.body).then(result => {
        res.status(201).json({message: "Post creation successful", post_info: result});
    }).catch(err => next(err));
})

router.get('/get-creator/:id', (req, res, next) => {
    const id = req.params.id;
    Posts.findPosterName(id).then(result => {
        res.status(200).json({poster_name: result.username});
    }).catch(err => next(err));
})

module.exports = router;