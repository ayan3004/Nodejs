const admin = require("../model/admin");

const fs = require('fs')
const path = require('path')
const mailer = require("../config/mailer");
module.exports.index = (req, res) => {
    try {
        res.render("login");
    } catch (error) {
        console.log("Error rendering index page: ", error);
    }
};

module.exports.fpass=(req,res)=>{
    res.render("fpass")
}

module.exports.userlogin=async(req,res)=>{
    let user = await admin.findOne({email : req.body.email})
    console.log(user);
    
    if(user){
        if(user.password == req.body.password){
            req.flash("success","login successfully")
           return res.redirect("/dashboard")
        }
        else{
            console.log("user not found");
             res.redirect("/")
        }
    }
    else{
        console.log("user not found");
        return res.redirect("/")
    }
}

module.exports.logout=async(req,res)=>{
    req.session.destroy();
    res.redirect("/")
}
module.exports.addcat=async(req,res)=>{
    res.render("addcat")
}
module.exports.dashboard = async (req, res) => {
    
    try {
        res.render("dashboard")

   
    } catch (error) {
        console.log("Error rendering dashboard: ", error);
    }
};

module.exports.addform = async (req, res) => {

    
    try {
        res.render("addform")

    } catch (error) {
        console.log("Error rendering dashboard: ", error);
    }
};
module.exports.viewform = async (req, res) => {
    
    try {
        let data = await admin.find({});
        if (data) {
            res.render("viewform", { data });
        } else {
            console.log("Data not found");
        } 
    } catch (error) {
        console.log("Error rendering dashboard: ", error);
    }
};

module.exports.insert = async (req, res) => {
    try {
        if(req.file){
            req.body.image = req.file.filename
        }
        let data = await admin.create(req.body);
        if (data) {
            res.redirect("viewform");
        } else {
            console.log("Data not submitted");
        }   
    } catch (error) {
        console.log("Error rendering addform: ", error);
    }
};

module.exports.deletedata = async (req, res, next) => {
    try {
        const deleteImage = await admin.findById(req.query.id)
        if(deleteImage.image){
            const oldImage = path.join(__dirname, '../image/', deleteImage.image)
            if(fs.existsSync(oldImage)){
                fs.unlinkSync(oldImage)
            }
        }

        const id = req.query.id;
        let deletedData = await admin.findByIdAndDelete(id);
        if (deletedData) {
            res.redirect("back");
        } else {
            console.log("Data not deleted");
        }
    } catch (err) {
        console.log("Error deleting data: ", err);
        next(err); 
    }
};

module.exports.editdata = async (req, res) => {
    try {
       
        let editdata = await admin.findById(req.query.id);
                if (editdata) {
                    res.render("edit", { editdata });
                } else {
                    console.log("Data not found");
                }    
   
    } catch (error) {
        console.log("Error retrieving data: ", error);
    }
};

module.exports.updatedata = async (req, res) => {
    try {
        const editimage = await admin.findById(req.query.id)
        if(editimage.image){
            const oldImage = path.join(__dirname, '../image/', editimage.image)
            if(fs.existsSync(oldImage)){
                fs.unlinkSync(oldImage)
            }
                req.body.image = req.file.filename
            
        }else{
            req.body.image = editimage.image
        }
        let updateData = await admin.findByIdAndUpdate(req.query.id, req.body);
                if (updateData) {
                    res.redirect("viewform");
                } else {
                    console.log("Data not updated");
                }   
    } catch (error) {
        console.log("Error rendering addform: ", error);
    }
};
module.exports.change = async (req,res)=>{
    res.render("change")
}
module.exports.changepass=async (req,res)=>{
    let admindata = await admin.findById(req.user.id);
     
    if(admindata){
        if(req.body.oldpass == admindata.password){
           if(req.body.oldpass != req.body.newpass){
                if(req.body.newpass == req.body.copass){
                let newpassword= await admin.findByIdAndUpdate(admindata.id,{password : req.body.newpass})
                newpassword ? res.redirect("/logout") : console.log("password not change")
                }else{
                    console.log("New password and confirm password are not same")
                    res.redirect("/change")

                }
           }
           else{
            console.log("old password and new password are same")
            
            res.redirect("/change")

           }
        }else{
            console.log("old password and password are  not same")
            res.redirect("/change")

        }

    }else{
        console.log("admin not found")
res.redirect("/change")
    }
}

module.exports.forgotpass = async (req,res)=>{
    let admindata = await admin.findOne({email : req.body.email});
    if(!admindata){
        return res.redirect("/");
    }
    let otp = Math.floor(Math.random() * 100000 + 90000);
    mailer.sendotp(req.body.email,otp);
    req.session.otp = otp
    req.session.adminId = admindata.id;

    res.render("newpass");;
}

module.exports.checkotp = async (req,res)=>{
    let otp = req.session.otp;
    let adminId = req.session.adminId;
  
    if(req.body.otp = otp){
       if(req.body.newpass == req.body.copass){
let changeauth = await admin.findByIdAndUpdate(adminId,{password : req.body.newpass})

changeauth && res.redirect("/")
       }
        
        else{
            res.redirect("/")
        }
    }
else{
    res.redirect("/")
}

}