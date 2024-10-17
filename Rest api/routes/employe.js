const express = require("express");
const routes = express.Router();
const employectl=require("../controller/employectl")
const auth = require("../config/emaployeauth");

routes.get("/viewemploye",auth,employectl.viewemploye)
routes.post("/logemploye",employectl.logemploye)
routes.delete("/deletemploye",employectl.deletemploye)
routes.post("/changepass",employectl.changepass)
routes.post("/forgetpass", employectl.forgetpass); 
routes.post("/verifyOtp",employectl.verifyOtp);

module.exports = routes;    
