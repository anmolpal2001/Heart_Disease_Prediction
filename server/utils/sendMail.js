import nodemailer from 'nodemailer'
import dotenv from "dotenv";
dotenv.config();
export const sendMail=async(sender,title,link)=>{
    try{
const transporter=nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port:process.env.MAILER_PORT,
    auth:{
        user:process.env.MAILER_USER,
        pass:process.env.MAILER_PASS
    }
})
const res=await transporter.sendMail({
    to:`${sender}`,
    from:process.env.MAILER_USER,
    subject:`${title}`,
    html:`<p>Here is your link for password reset : <a href=${link}>Change your password from here</a></p>`

})
console.log('mail send successfully')
}
catch(err){
    console.log(err)

}
}