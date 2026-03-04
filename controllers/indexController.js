const messages = require("../messages")

function getMessage (req, res){
    let filteredMessages = messages;
   
  // If ?user=... exists in URL
  if (req.query.user) {
    const selectedUser = req.query.user;
    filteredMessages = messages.filter(msg => msg.user === selectedUser);
  }

  res.render('index', { 
    title: 'Mini Messageboard',
    messages: filteredMessages 
  });
    
}

module.exports = {getMessage}