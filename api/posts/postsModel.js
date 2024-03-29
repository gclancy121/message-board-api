const db = require('../../data/dbConfig');

function fetchPosts() {
    return db('posts');
}

function findById(id) {
    return db('posts').where('post_id', id).first();
}

async function addPost(post) {
    const [id] = await db('posts').insert(post);
    return findById(id);
}

function findPosterName(creator_id) {
    return db('users').where('user_id', creator_id).first();
}

function findAllPostsByUser(user_id) {
    return db('posts').where('created_by', user_id);
}

module.exports = {
    findById,
    addPost,
    fetchPosts,
    findPosterName,
    findAllPostsByUser,
}