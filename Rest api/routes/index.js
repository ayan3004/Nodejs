const express = require("express");
const routes = express.Router();
const adminctl = require("../controller/adminctl");

routes.use ("/admin",require("./admin"))
routes.use("/manager",require("./manager"))
routes.use("/employe",require("./employe"))

module.exports = routes; 