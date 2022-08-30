const Users = require('../users/usersModel');

async function checkUsernameTaken(req, res, next) {
    const username = req.body.username;
    await Users.findByUsername(username).then(result => {
        if (result != null) {
            res.status(400).json({message: 'A weeblet has already stolen your idea, buddy. New username needed.'})
            return;
        }
    next();
    })
}

async function checkDeletePossible(req, res, next) {
    const id = req.params.id;
    await Users.findById(id).then(result => {
        if (result == null) {
            res.status(400).json({message: "user cannot be deleted"});
            return;
        }
        next();
    })
}

async function checkUsernameExists(req, res, next) {
    const username = req.params.username;
    await Users.findByUsername(username).then(result => {
        if (result == null) {
            res.status(400).json({message: "user does not exist"});
            return;
        }
        next();
    })
}

function checkPayload(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    if (username == null || username.trim() === '') {
        res.status(400).json({message: "You need a username and a password baka! Gotta keep safe in these times."})
        return;
    }
    if (password == null || password.trim() === '') {
        res.status(400).json({message: "You need a username and a password baka! Gotta keep safe in these times."})
        return;
    }
    next();
}


module.exports = {
    checkUsernameTaken,
    checkPayload,
    checkDeletePossible,
}