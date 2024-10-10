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
        gender : {
            type : String,
            required : true
        },
        hobby : {
            type : Array,
            required : true
        },
        image : {
            type : String,
            required : true
        },
        creaedAT :{
            type : String,
            required : true
        }
    }
);

const crudtable = mongoose.model("apidata",crud)

module.exports = crudtable