const express = require("express");
const routes = express.Router();
const adminctl = require("../controller/adminctl");

const multer = require("multer");
const Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploades/admin')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() )
    }
})

const upload = multer({storage : Storage}).single("image")

routes.post("/addadmin",upload,adminctl.addadmin)
routes.post("/logadmin",adminctl.logadmin);
routes.get("/viewadmin",adminctl.viewadmin)
routes.post("/changepass",adminctl.changepass)
routes.post("/forgetpass", adminctl.forgetpass); 
routes.post("/verifyOtp",adminctl.verifyOtp);
routes.post("/addmanager",adminctl.addmanager);
routes.get("/viewadmin",adminctl.viewadmin)
routes.get("/viewmanager",adminctl.viewmanager)
routes.delete("/deletemanager",adminctl.deletemanager)
routes.post("/addemploye",adminctl.addemploye)
routes.get("/viewemploye",adminctl.viewemploye)
routes.delete("/deletemploye",adminctl.deletemploye)




module.exports = routes;    