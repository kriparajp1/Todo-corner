const Suggestion=require("../model/suggestion")

const aboutUs=(req,res)=>{
    try {
        let status=req.session.user?true:false
         res.render('aboutUs',{status:status})
    } catch (error) {
        
    }
   
}
const contactUs=(req,res)=>{
    try {
        let status=req.session.user?true:false
        res.render("contactUs",{status:status})
    } catch (error) {
        
    }
}
const suggestion=async (req,res)=>{
    try {
        
        const {name,email,description}=req.body
        const suggestion={
            name,email,description
        }
        await Suggestion.create(suggestion)
        res.send("thankyou for your valuable suggestion")
    } catch (error) {
        
    }
}
const four=(req,res)=>{
    try {
        let status=req.session.user?true:false
        res.render("404",{status:status})
    } catch (error) {
        
    }
}
module.exports={
    aboutUs,contactUs,suggestion,four
}