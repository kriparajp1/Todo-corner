const express=require("express")
require('dotenv').config();
const app=express()
const session =require("express-session")
const nocache=require("nocache")
const passport = require('passport')
const route=require("./routes/userRoutes")
;

const port=5555
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
const oneday = 1000 * 60 * 60 * 24;
app.use(
    session({
      secret: "secret-Key",
      resave: false,
      cookie: { maxAge: oneday },
      saveUninitialized: true,
    })
  );
app.use(nocache())


app.set("view engine","ejs")
app.use(passport.initialize());
app.use(passport.session());

app.use("/",route)

app.listen(port,()=>console.log(`http://localhost:${port}`))