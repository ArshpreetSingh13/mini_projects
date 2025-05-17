const mongoose= require("mongoose")


let CategorySchema=mongoose.Schema({
    autoId:{type:Number,default:0},
    category:{type:String,default:0},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Categorys", CategorySchema)