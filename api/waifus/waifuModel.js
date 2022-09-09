const db = require('../../data/dbConfig');

function fetchData() {
    return db('waifus');
}

async function addData(post) {
    await db('waifus').insert(post);
    return post;
}

function updateData(id, changes) {
    return db('waifus').where('waifu_id', id).update(changes);
}

function findByName(name) {
    return db('waifus').where('waifu_name', name).first();
}

function findByNameArray(name) {
    return db('waifus').where('waifu_name', 'like', `%${name}%`);
}

function findById(id) {
    return db('waifus').where('waifu_id', id).first();
}


module.exports = {
    fetchData,
    addData,
    findByName,
    findById,
    findByNameArray,
    updateData,
}