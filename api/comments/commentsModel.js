const db = require('../../data/dbConfig');

function findById(id) {
    return db('comments').where('comment_created_by', id).first();
}

async function addComment(comment) {
    const [id] = await db('comments').insert(comment);
    return findById(id);
}

function fetchAllCommentsOnPost(post_id) {
    return db('comments').where('post_id', post_id);
}

module.exports = {
    findById,
    addComment,
    fetchAllCommentsOnPost,
}