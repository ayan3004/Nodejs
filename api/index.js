const express = require("express");
const app = express()
const port = 5555;
app.use(express.urlencoded());
const db = require("./config/db");
const admin = require("./model/admin");
const routes = require("./routes");



app.use('/',require("./routes/index"));

app.listen(port , (err)=>{
    err ? console.log(err) : console.log(`server started on ${port}`);
})

