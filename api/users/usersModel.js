const db = require('../../data/dbConfig');

function findById(id) {
    return db('users').where('user_id', id).first();
}
function findByUsername(username) {
    return db('users').where('username', username).first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}



module.exports = {
    findById,
    addUser,
    findByUsername
}