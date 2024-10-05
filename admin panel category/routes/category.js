const express = require("express");
const routes = express.Router();
const passport = require("passport")
const catctl = require("../controllers/catctl");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'image/category/')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({storage: storage}).single('image')

routes.get("/addcat",passport.checkauth,catctl.addcat)
routes.get("/vcat",passport.checkauth,catctl.vcat)
routes.post("/insert",upload ,passport.checkauth,catctl.insert)
routes.get("/deletedataa",passport.checkauth,catctl.deletedataa)
routes.get("/editdata",passport.checkauth,catctl.editdata)
routes.post("/updatedataa",upload ,passport.checkauth,catctl.updatedataa)




module.exports = routes; 