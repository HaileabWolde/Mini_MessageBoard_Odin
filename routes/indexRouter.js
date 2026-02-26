const {getMessage} = require('../controllers/indexRouter')
const {Router}  = require("express");

const indexRouter = Router();




indexRouter.get("/", getMessage)

module.exports = indexRouter;