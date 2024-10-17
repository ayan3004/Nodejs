const express = require("express");
const routes = express.Router();
const managerctl = require("../controller/managerctl");
const auth = require("../config/managerauth");


routes.post("/logmanager",managerctl.logmanager);
routes.get("/viewmanager",auth,managerctl.viewmanager)
routes.post("/changepass",managerctl.changepass)
routes.post("/forgetpass", managerctl.forgetpass); 
routes.post("/verifyOtp",managerctl.verifyOtp);
routes.post("/addemploye",managerctl.addemploye)
routes.get("/viewemploye",managerctl.viewemploye)
routes.delete("/deletemploye",managerctl.deletemploye)




module.exports = routes;    