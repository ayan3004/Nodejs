const express = require("express");
const routes = express.Router();
const passport = require("passport")
const prctl = require("../controllers/prctl");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'image/product/')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({storage: storage}).single('image')

routes.get("/addpr",passport.checkauth,prctl.addpr)
routes.post("/insert",upload,passport.checkauth,prctl.insert)
routes.get("/vpr",passport.checkauth,prctl.vpr)
routes.get("/deletedata",passport.checkauth,prctl.deletedata)
routes.get("/editpr",passport.checkauth,prctl.editpr)
routes.post("/updatedataa",passport.checkauth,prctl.updatedataa)

module.exports = routes