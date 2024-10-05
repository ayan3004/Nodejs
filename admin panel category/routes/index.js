const express = require("express");
const routes = express.Router();
const passport = require("passport")
const adminctl = require("../controllers/adminctl");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'image/')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage}).single('image')

routes.get("/", adminctl.index)
routes.post("/userlogin",passport.authenticate("local",{failureRedirect:"/"}),adminctl.userlogin);
routes.get("/logout",passport.checkauth,adminctl.logout)
routes.get("/dashboard",passport.checkauth,adminctl.dashboard)
routes.get("/addcat",passport.checkauth,adminctl.addcat)
routes.get("/addform",passport.checkauth,adminctl.addform)
routes.get("/viewform",passport.checkauth,adminctl.viewform)
routes.post("/insert",upload ,passport.checkauth,adminctl.insert)
routes.get("/deletedata",passport.checkauth,adminctl.deletedata)
routes.get("/editdata",passport.checkauth,adminctl.editdata)
routes.post("/updatedata",upload ,passport.checkauth,adminctl.updatedata)
routes.get("/change",passport.checkauth,adminctl.change)
routes.post("/changepass",passport.checkauth,adminctl.changepass)
routes.get("/fpass",adminctl.fpass)
routes.post("/checkotp",adminctl.checkotp)

routes.post("/forgotpass",adminctl.forgotpass)



module.exports = routes; 