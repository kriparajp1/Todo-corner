const os = require('os');
const NormalTodo=require("../model/normalTodo")

function getMacAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.mac;
            }
        }
    }
    return '00:00:00:00:00:00';
}

const macAddress=getMacAddress()

const homePage=async (req,res)=>{
    try {
        
        const todo=await NormalTodo.find({userId:macAddress})
        res.render("normalTodo",{todo,status:false})
        
    } catch (error) {
        
    }
}
const addTodo = async (req, res) => {
    try {
        const { name, description, priority } = req.body;
        const todo = {
            name,
            description,
            priority,  
            userId: macAddress
        };
        console.log(todo)
        
        await NormalTodo.create(todo); 

        res.redirect("/normalTodo");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await NormalTodo.findByIdAndDelete(id);
        res.status(200).send({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to delete task' });
    }
}



module.exports={
    homePage,addTodo,deleteTodo
}