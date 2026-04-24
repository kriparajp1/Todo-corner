const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://arjunsreechakram_db_user:jUu0vwXudbkNukk8@synxbooking.kbzh4p3.mongodb.net/?appName=synxbooking").then(()=>console.log("db connected successfully")).catch(()=>console.log("db not connected"))

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    googleId:{
      type:String,
      required:false,
    },
    password: {
      type: String,
      required: false  
    },
    profilePhoto: {
      type: String,
      required: false 
    }
  });
  
  const collectionModel = mongoose.model("todouserbase", schema);
  module.exports = collectionModel;
   
