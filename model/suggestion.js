const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://kriparaj331:DgKXvAygw895jufN@todo.7lqht.mongodb.net/?retryWrites=true&w=majority&appName=todo").then(()=>console.log("db connected successfully")).catch(()=>console.log("db not connected"))

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
