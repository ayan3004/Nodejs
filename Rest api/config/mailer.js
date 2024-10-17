const nodemailer = require("nodemailer");

const trasnsport = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "ayansangani3004@gmail.com",
        pass : "qvtitusipneyjmig"
    }
})
module.exports.sendotp = (to,otp)=>{
    let mailoption ={
        from : "ayansangani3004@gmail.com",
        to : to,
        subjet : "Your otp",
        text : `your otp is ${otp}`
    }
    trasnsport.sendMail(mailoption,(err)=>{
        err && console.log(err);
    })
}