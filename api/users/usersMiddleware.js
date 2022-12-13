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
    if (password.trim().length < 8) {
        res.status(400).json({message: "Your password is too short! It has to be at least 8 characters long."})
        return;
    }
    next();
}

function checkNewPasswordValid(req, res, next) {
    const {password, newPassword} = req.body
    if (password == null || password.trim() === '') {
        res.status(400).json({message: "You need a password! C'mon, you know this."})
        return;
    } else if (password.trim().length < 8) {
        res.status(400).json({message: "Your password is too short! Pick a better one that's at least 8 characters long."})
        return;
    } else if (newPassword == null || newPassword.trim() === '') {
        res.status(400).json({message: "You need to confirm your new password!"})
        return;
    } else if (newPassword !== password) {
        res.status(400).json({message: "Your passwords do not match!"})
        return;
    }
    next();
}

function checkUpdateOkay(req, res, next) {
    const {about_me, fav_waifu, profile_picture} = req.body;
    if (about_me == null || about_me.trim() === "") {
        res.status(400).json({message: "You have to have an about me section! How else will people know you?"})
        return;
    } 
    if (fav_waifu == null || fav_waifu.trim() === '') {
        res.status(400).json({message: "You have to have a favorite waifu! Every weeb has one!"})
        return;
    }
    if (profile_picture == null || profile_picture.trim() === '') {
        res.status(400).json({message: "You have to have a profile picture! You can't just have a blank picture, how will anyone recognize you?"})
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
    checkUpdateOkay,
    checkNewPasswordValid,
}