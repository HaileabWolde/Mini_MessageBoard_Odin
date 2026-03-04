const messages = require("../messages")
const {getMessage} = require('../controllers/indexController')
const {Router}  = require("express");

const indexRouter = Router();




indexRouter.get("/", getMessage)
indexRouter.post("/new", (req, res)=>{
   const { Name, Message} = req.body;
  
   messages.push({ 
      text: Message, 
      user: Name, 
      added: new Date() });
      res.redirect('/')
})

module.exports = indexRouter;