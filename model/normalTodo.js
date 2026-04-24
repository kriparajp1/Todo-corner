const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://arjunsreechakram_db_user:jUu0vwXudbkNukk8@synxbooking.kbzh4p3.mongodb.net/?appName=synxbooking").then(()=>console.log("db connected successfully")).catch(()=>console.log("db not connected"))

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    userId:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
    priority:{
        type:String,
        enum:["priority","priority 1","priority 2","priority 3","priority 4"],
        required:false
    },
    remindme:{
        date:{
            type:Date,
            required:false
        },
        time:{
            type:String,
            required:false
        }
    }
  });
  
  const todoList = mongoose.model("normaltodo", schema);
  module.exports = todoList;
  
