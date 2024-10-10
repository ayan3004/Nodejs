const admin = require("../model/admin");
const bcrypt = require("bcrypt")
const moment = require("moment")

module.exports.addadmin= async (req,res)=>{
    let user =await admin.findOne({email : req.body.email});
    if(user){
        return res.status(200).json({msg : "user already exits"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10);
    req.body.creaedAT = moment().format('MMMM Do YYYY, h:mm:ss a'); 

    
    req.body.image = req.file.path
    let data = await admin.create(req.body)
    data ? res.status(200).json({msg : 'data sent scuccessfully'}) : res.status(404).json({msg : 'error for sendin data'})
    console.log(req.body)
    
}