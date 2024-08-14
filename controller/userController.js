const User=require("../model/userModel")

const loginGet=(req,res)=>{
     try {
        res.render("login",{status:false})
     } catch (error) {
        
     }
}
const loginPost= async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email:email})
        console.log(user,email,password)
        if(!user){
            res.redirect("/signup")
        }else{
            if(user.password===password){
                req.session.user=email;
                res.redirect("/homePage")
            }
        }
    } catch (error) {
        
    }
}
const signupPost =async (req,res)=>{
    try {
        const {name,email,phone,password}=req.body
        const checkUser= await User.findOne({email:email})
        console.log(checkUser)
        if(!checkUser){
            const user={
                name,
                email,
                phone,
                password
            }
            await User.create(user);
            res.redirect("/")
        }else {
            res.status(400).send("User already exists");
        }
    } catch (error) {
        console.log(error)
    }
}
const signupGet=(req,res)=>{
    try {
        res.render("signUp",{status:false})
    } catch (error) {
        
    }
}
const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send("Server Error");
        }
        res.redirect('/');
    });
};
module.exports={
    loginGet,signupGet,signupPost,loginPost,logout
}