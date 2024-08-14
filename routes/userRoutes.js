const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")
const homeController=require("../controller/homePage")
const session=require("../middleware/userSession")
const moreUs=require("../controller/moreUs")
const normalTodo=require("../controller/normalTodo")
const passport=require("../controller/google")

router.get("/",session.isSession,userController.loginGet)
router.post("/",session.isSession,userController.loginPost)
router.get("/signup",session.isSession,userController.signupGet)
router.post("/signup",session.isSession,userController.signupPost)

router.get("/logout",userController.logout)

router.get("/homePage",session.isuser,homeController.homePage)
router.post("/todo",session.isuser,homeController.addTodo)
router.delete("/todo/:id",homeController.deleteTodo)

router.get("/aboutUs",moreUs.aboutUs)
router.get("/contactUs",moreUs.contactUs)
router.post("/contactUs",moreUs.suggestion)

// normal todo
router.get("/normalTodo",normalTodo.homePage)
router.post("/normalTodo",normalTodo.addTodo)
router.delete("/normalTodo/:id",normalTodo.deleteTodo)

router.get("/auth/google",passport.googleAuth)
router.get("/auth/google/callback",passport.googleAuthCallback)

router.all("*",moreUs.four)

module.exports=router