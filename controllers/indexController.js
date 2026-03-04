const messages = require("../messages")

function getMessage (req, res){
    res.render('index', {title: 'Mini Messageboard', messages})
}

module.exports = {getMessage}