const subadmin = require("../model/subadmin");
const newadmin = require("../model/newadmin")

module.exports.addsubcat=async(req,res)=>{
let data = await newadmin.find({});
data ? res.render("addsubcat",{data}) : console.log("can't find category");
}

module.exports.subinsert = async(req,res)=>{
    let data = await subadmin.create(req.body);
    data ? res.redirect("back") : console.log("can't view category");
    
}

module.exports.vsubcat = async(req,res)=>{
    let data = await subadmin.find({}).populate("categoryid");
    data ? res.render("vsubcat",{data}) : console.log("can't find category"); 
}

module.exports.deletedata = async(req,res)=>{
    let deletedata = await subadmin.findByIdAndDelete(req.query.id);
    deletedata? res.redirect("back") : console.log("Data not Deleted");

}

module.exports.editdata = async (req,res)=>{
    let editdata = await subadmin.findById(req.query.id);
    editdata  ? res.render("editsubcat",{editdata}):console.log("Data not found");

}
module.exports.updatedataa = async (req,res)=>{
    let updatedata = await subadmin.findByIdAndUpdate(req.query.id,req.body);
    updatedata ? res.redirect("vsubcat") : console.log("Data Not update");
}