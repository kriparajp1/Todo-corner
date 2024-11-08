const passport=require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userModel=require("../model/userModel")


passport.use(new GoogleStrategy({
  clientID: "uyuhuuhgyguyghh",
  clientSecret: "huhygygtdretrdytgh",
  callbackURL: "http://localhost:5555/auth/google/callback",
},
async (request, accessToken, refreshToken, profile, done) => {
  try {
    
    let existingUser = await userModel.findOne({ googleId: profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser={
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        profilePhoto: profile.photos[0].value,
      }
      await userModel.create(newUser)
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
}
));

passport.serializeUser((user, done) => {
done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
try {
  console.log(id)
  const user = await userModel.findById(id);
  done(null, user);
} catch (error) {
  done(error, false);
}
});

module.exports=passport 
