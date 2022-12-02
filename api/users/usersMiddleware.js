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

function checkQuestionAnswer(req, res, next) {
    const {security_question_answer} = req.body;
    if (security_question_answer == null || security_question_answer.trim() === '') {
        res.status(400).json({message: "You have to answer the security question!"})
        return;
    }
    next();
}

function checkPayload(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    if (username == null || username.trim() === '') {
        res.status(400).json({message: "You need a username and a password! Gotta keep safe in these times."})
        return;
    }
    if (password == null || password.trim() === '') {
        res.status(400).json({message: "You need a username and a password! Gotta keep safe in these times."})
        return;
    }
    next();
}

async function checkResetIsValid(req, res, next) {
    const {username, security_question, security_question_answer} = req.body;
    if (username == null || username.trim() === '') {
        res.status(400).json({message: "I need to know who's password it is I'm resetting."})
        return;
    }
    if (security_question === '') {
        res.status(400).json({message: "I need the security question to verify who you are."})
        return;
    }
    if (security_question_answer == null || security_question_answer.trim() === "") {
        res.status(400).json({message: "Answer the question. The question alone is meaningless."})
        return;
    }
    await Users.findByUsername(username).then(result => {
        if (result == null) {
            res.status(400).json({message: "This user doesn't exist. Go register!"});
            return;
        } else {
            if (result.security_question !== security_question) {
                res.status(400).json({message: "Your question and answer do not match. Request denied."})
                return;
            } 
            if (result.security_question_answer !== security_question_answer) {
                res.status(400).json({message: "Your question and answer do not match. Request denied."})
                return;
            }
            req.body.user_id = result.user_id;
           next();
        }
    })
    
}

module.exports = {
    checkUsernameTaken,
    checkPayload,
    checkDeletePossible,
    checkQuestionAnswer,
    checkResetIsValid,
}