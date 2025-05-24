

const mongoose=require("mongoose")

let userschema = mongoose.Schema({
    autoId:{type:Number,default:0},
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    contect:{type:String,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("User", userschema)