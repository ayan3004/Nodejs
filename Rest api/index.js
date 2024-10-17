const express = require("express");
const app = express()
const port = 5555;
app.use(express.urlencoded());
const db = require("./config/db");
const admin = require("./model/admin");
const routes = require("./routes");
const session = require('express-session');

app.use(session({
    name : "demo",
    secret: 'keyboard',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge : 100 * 100 * 60}
  }))



app.use('/',require("./routes/index"));
app.use('/manager',require("./routes/manager"))
app.use('/employe',require("./routes/employe"))

app.listen(port , (err)=>{
    err ? console.log(err) : console.log(`server started on ${port}`);
})

