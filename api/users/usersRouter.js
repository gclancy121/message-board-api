const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = require('express').Router();
const Users = require('./usersModel');
const {
    checkUsernameTaken, 
    checkPayload, 
    checkDeletePossible, 
    checkQuestionAnswer,
    checkResetIsValid,
    checkUpdateOkay,
    checkNewPasswordValid,
    } = require('./usersMiddleware');

router.get('/', (req, res, next) => {
    Users.findAll().then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.get('/byid/:id', (req, res, next) => {
    const id = req.params.id;
    Users.findById(id).then(result => {
        res.status(200).json(result);
    })
})

router.get('/:username', (req, res, next) => {
    const username = req.params.username;
    Users.findByUsername(username).then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})
router.put('/:id', checkUpdateOkay, (req, res, next) => {
    const id = req.params.id;
    const changes = req.body;
    Users.updateUser(id, changes).then(result => {
        res.status(200).json(result);
    }).catch(err => next(err));
})

router.post('/reset-checks', checkResetIsValid, (req, res, next) => {
    res.status(200).json({message: "Checks passed, proceed", id: req.body.user_id});
})

router.patch('/reset-password', checkNewPasswordValid, (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 8);
    const newPassword = {password: hash};

    Users.updateUser(req.body.id, newPassword).then(result => {
        res.status(200).json({message: "success"})
    })
})

router.post('/register', checkPayload, checkQuestionAnswer, checkUsernameTaken, (req, res, next) => {
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
            res.status(200).json({token: token, message: `Welcome back to Weeb Central, ${username}!`, username: username});
        } else {
            res.status(401).json({message: "Hey, that information is invalid! Fix it!"});
        }
    }).catch(err => next(err));
})

router.delete("/:id", checkDeletePossible, (req, res, next) => {
    const id = req.params.id;
    Users.removeUser(id).then(result => {
        res.status(200).json(result);
    })
})


function generateToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    };
    const options = {
        expiresIn: 100000,
    };
    return jwt.sign(payload, 'i love sachi komine', options);
}

module.exports = router;