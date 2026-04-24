const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://arjunsreechakram_db_user:jUu0vwXudbkNukk8@synxbooking.kbzh4p3.mongodb.net/?appName=synxbooking").then(()=>console.log("db connected successfully")).catch(()=>console.log("db not connected"))

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
  });

  const suggestion= mongoose.model("suggestion", schema);
  module.exports=suggestion;
