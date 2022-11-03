const Waifus = require('./waifuModel');

async function checkWaifuAlreadyExists(req, res, next) {
    const name = req.body.waifu_name;
    await Waifus.findByName(name).then(result => {
        if (result != null) {
            res.status(400).json({message: "Hey! This game already exists in the database!"});
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
        res.status(400).json({message: "Tell me the game's name first."});
        return;
    }
    if (description == null || description.trim() === '') {
        res.status(400).json({message: "Tell me about the game first."});
        return;
    }
    if (picture == null || picture.trim() === '') {
        res.status(400).json({message: "I need a picture of the game first."});
        return;
    }
    next();
    
}



module.exports = {
    checkPayloadValid,
    checkWaifuAlreadyExists,
    checkSearchExists,
}