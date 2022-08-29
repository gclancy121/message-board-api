const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = require('express').Router();
const Users = require('../users/usersModel');
const {checkUsernameTaken, checkPayload} = require('./authMiddleware');

router.post('/register', checkPayload, checkUsernameTaken, (req, res, next) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.addUser(user).then(result => {
        res.status(201).json({message: `Welcome to Weeb Central, ${result.username}!`, ...result});
    }).catch(err => next(err));
})

router.post('/login', checkPayload, (req, res, next) => {
    let {username, password} = req.body;
    Users.findByUsername(username).then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({token: token, message: `Welcome back to Weeb Central, ${username}!`});
        } else {
            res.status(401).json({message: "Hey, that information is invalid! Fix it!"});
        }
    }).catch(err => next(err));
})

function generateToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    };
    const options = {
        expiresIn: '10seconds',
    };
    return jwt.sign(payload, 'sachi komine', options);
}

module.exports = router;