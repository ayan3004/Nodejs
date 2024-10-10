const express = require("express");
const routes = express.Router();
const adminctl = require("../controller/adminctl");

routes.use ("/admin",require("./admin"))

module.exports = routes; 