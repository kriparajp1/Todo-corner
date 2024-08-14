const todoList=require("../model/todoModel")
const User=require("../model/userModel")


const homePage=async (req,res)=>{
    try {
        let status=req.session.user?true:false
        const user=await User.findOne({email:req.session.user})
        const todo=await todoList.find({userId:user._id})
        res.render("todoDash",{todo,user,status:status})
        
    } catch (error) {
        
    }
}
const addTodo = async (req, res) => {
    try {
        const { name, description, priority } = req.body;
        const user = await User.findOne({ email: req.session.user });
        
        if (!user) {
            return res.status(404).send("User not found");
        }
        const todo = {
            name,
            description,
            priority,  
            userId: user._id
        };
        
        await todoList.create(todo); 

        res.redirect("/homePage");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoList.findByIdAndDelete(id);
        res.status(200).send({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to delete task' });
    }
}



module.exports={
    homePage,addTodo,deleteTodo
}