function checkPayload(req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const complaint = req.body.complaint;
    if (name == null || name.trim() === '') {
        res.status(400).json({message: "Look buddy if you're going to complain you have to tell me who you are."});
        return;
    }
    if (email == null || email.trim() === '') {
        res.status(400).json({message: "Guess you don't want a response to the complaint then? Give me your email."});
        return;
    }
    if (complaint == null || complaint.trim() === '') {
        res.status(400).json({message: 'You forgot to include the complaint, genius. Real galaxy brain move there.'});
        return;
    }
    next();
}

module.exports = {
    checkPayload,
}