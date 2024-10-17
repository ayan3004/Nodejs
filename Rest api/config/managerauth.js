const admin = require("../model/admin")
const manager = require("../model/manager")
const employe = require("../model/employe")
const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
    let token = req.header("Authorization");
    if(!token){
        return res.status(400).json({msg : "unauthorize user"});
        
    }
    let newtoken = token.slice(7,token.length);
    let decode = jwt.verify(newtoken,"node");

    let man = await manager.findById(decode.userdata._id)
    let emp = await employe.findById(decode.userdata._id)

    if(!man && !emp){
        return res.status(400).json({msg:"invalid manager or employe"})
    }
 
    req.user = decode;
    
    next();
}

module.exports = auth;