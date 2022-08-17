const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, 'sachi komine', (err, decoded) => {
            if (err != null) {
                console.log(err);
                res.status(401).json({message: "Login token invalid, log in access"});
                return;
            }
            next();
        });
    } else {
        res.status(401).json({message: "Gotta be logged in to see that one, chief."});
    }
};