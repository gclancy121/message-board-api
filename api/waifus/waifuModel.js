const db = require('../../data/dbConfig');

function fetchData() {
    return db('waifus');
}

async function addData(post) {
    await db('waifus').insert(post);
    return post;
}

function findByName(name) {
    return db('waifus').where('waifu_name', name).first();
}

module.exports = {
    fetchData,
    addData,
    findByName,
}