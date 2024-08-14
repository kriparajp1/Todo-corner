function isuser(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
}
function isSession(req,res,next){
    if(!req.session.user){
       next();
    }else{
        res.redirect('/homePage');
    }
}

module.exports={
    isuser,isSession
}