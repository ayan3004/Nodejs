const express = require("express");
const routes = express.Router();
const passport = require("passport")
const adminctl = require("../controllers/adminctl");

routes.get("/", adminctl.index)
routes.post("/userlogin",passport.authenticate("local",{failureRedirect:"/"}),adminctl.userlogin);
routes.get("/logout",passport.checkauth,adminctl.logout)
routes.get("/dashboard",passport.checkauth,adminctl.dashboard)
routes.get("/sample",passport.checkauth,adminctl.sample)
routes.get("/addform",passport.checkauth,adminctl.addform)
routes.get("/viewform",passport.checkauth,adminctl.viewform)
routes.post("/insert",passport.checkauth,adminctl.insert)
routes.get("/deletedata",passport.checkauth,adminctl.deletedata)
routes.get("/editdata",passport.checkauth,adminctl.editdata)
routes.post("/updatedata",passport.checkauth,adminctl.updatedata)

module.exports = routes; 