const messages = require("../messages")
const {getMessage} = require('../controllers/indexController')
const {Router}  = require("express");

const indexRouter = Router();


  

indexRouter.get("/", getMessage)

indexRouter.post("/new", (req, res)=>{
   const { Name, Message} = req.body;
  let exisitingUser = messages.find((message)=> message.user === Name)

  if(exisitingUser){
   exisitingUser.text.push(Message)
  }
  else{
    messages.push({ 
      text: [Message], 
      user: Name, 
      added: new Date() });
  }
  
      res.redirect('/')
})

module.exports = indexRouter;