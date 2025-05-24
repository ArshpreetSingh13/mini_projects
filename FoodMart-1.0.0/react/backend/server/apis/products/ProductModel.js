const mongoose= require("mongoose")


let ProductSchema=mongoose.Schema({
    autoId:{type:Number,default:0},
    product:{type:String,default:""},
    price:{type:Number,default:0},
    image:{type:String,default:""},
    category:{type:String,default:""},
    description:{type:String,default:""},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Product", ProductSchema)