const db = require('../../data/dbConfig');

function findAll() {
    return db('users');
}

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

function removeUser(id) {
    return db('users').where('user_id', id).del();
}


module.exports = {
    findAll,
    findById,
    addUser,
    findByUsername,
    removeUser,
}