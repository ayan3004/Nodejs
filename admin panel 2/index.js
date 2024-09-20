const express = require("express");
const port = 5000;
const app = express();
app.use(express.urlencoded());
app.set("view engine","ejs");
var session = require('express-session');
const passport = require("passport");
const localst = require("./config/passport");
const multer = require("multer")        
const db =require("./config/db");
const admin = require("./model/admin");
const path = require("path")

app.use(session({
    name : "demo",
    secret: 'keyboard',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge : 100 * 100 * 60}
  }))


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setauthuser)

const routes = require("./routes")
app.use("/",routes)
app.use(express.static(path.join(__dirname , "Public")))
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on ${port}`);   
});