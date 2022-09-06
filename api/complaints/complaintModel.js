const db = require('../../data/dbConfig');

function findById(id) {
    return db('complaints').where('complaint_id', id).first();
}

async function addComplaint(complaint) {
    const [id] = await db('complaints').insert(complaint);
    return findById(id);
}


module.exports = {
    findById,
    addComplaint,
}