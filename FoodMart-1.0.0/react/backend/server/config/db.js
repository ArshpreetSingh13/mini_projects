const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Quality_Corners").then(()=>{
    console.log("Server is connect");
    
}).catch(()=>{
    console.log("server in not connected");
    
})