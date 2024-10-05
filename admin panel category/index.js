const express = require("express");
const port = 5000;
const app = express();
const flashconnect = require("connect-flash");



app.use(express.urlencoded());
app.set("view engine","ejs");
var session = require('express-session');
const passport = require("passport");
const localst = require("./config/passport");
const multer = require("multer")        
const db =require("./config/db");
const admin = require("./model/admin");
const path = require("path")
const connectflash = require("./config/connectflash");

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
app.use(flashconnect());  
const routes = require("./routes")
app.use(connectflash.setflash);

app.use("/",routes)
app.use("/category",require("./routes/category"))
app.use("/subcategory",require("./routes/subcategory"))
app.use("/product",require("./routes/product"))


app.use(express.static(path.join(__dirname , "Public")))
app.use('/image', express.static(path.join(__dirname, 'image')))
app.use(express.static(path.join(__dirname, 'image/category')))
app.use(express.static(path.join(__dirname, 'image/product')))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on ${port}`);   
});