const express = require("express");
const routes = express.Router();
const passport = require("passport")
const subctl = require("../controllers/subctl");

routes.get("/addsubcat",passport.checkauth,subctl.addsubcat)
routes.post("/subinsert",passport.checkauth,subctl.subinsert)
routes.get("/vsubcat",passport.checkauth,subctl.vsubcat)
routes.get("/deletedata",passport.checkauth,subctl.deletedata)
routes.get("/editdata",passport.checkauth,subctl.editdata)
routes.post("/updatedataa",passport.checkauth,subctl.updatedataa)


module.exports = routes