const mongoose = require("mongoose");

const crud = mongoose.Schema(
    {
       name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true   
        },
        password : {
            type : String,
            required : true
        },
        phone:{
            type : String,
            required : true
        }
    }
);

const crudtable = mongoose.model("employedata",crud)

module.exports = crudtable