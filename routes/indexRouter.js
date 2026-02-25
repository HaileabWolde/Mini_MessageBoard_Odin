const {Router}  = require("express");

const indexRouter = Router();


const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res)=>{
    res.render("index", {users: users})
})

module.exports = indexRouter;