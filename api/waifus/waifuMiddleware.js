const Waifus = require('./waifuModel');

async function checkWaifuAlreadyExists(req, res, next) {
    const name = req.body.waifu_name;
    await Waifus.findByName(name).then(result => {
        if (result != null) {
            res.status(400).json({message: "Hey! This waifu already exists baka!"});
            return;
        }
        next();
    })
}

async function checkSearchExists(req, res, next) {
    const name = req.params.name;
    await Waifus.findByNameArray(name).then(result => {
        if (result == null) {
            res.status(400).json({message: "invalid search param"});
            return;
        }
        next();
    })
}

function checkPayloadValid(req, res, next) {
    const name = req.body.waifu_name;
    const description = req.body.waifu_description;
    const picture = req.body.waifu_picture;
    if (name == null || name.trim() === '') {
        res.status(400).json({message: "Tell me your waifu's name first! I can't add her if I don't know who she is!"});
        return;
    }
    if (description == null || description.trim() === '') {
        res.status(400).json({message: "Tell me about your waifu! I need to know why she's your waifu and what makes her great."});
        return;
    }
    if (picture == null || picture.trim() === '') {
        res.status(400).json({message: "I need a picture of your waifu dude. How am I supposed to like her if I can't see her?"});
        return;
    }
    next();
    
}



module.exports = {
    checkPayloadValid,
    checkWaifuAlreadyExists,
    checkSearchExists,
}