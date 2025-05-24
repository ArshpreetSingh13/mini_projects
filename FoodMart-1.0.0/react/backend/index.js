const express = require("express")
const cors=require('cors')


const app=express()
const PORT=5000
app.use(express.urlencoded())
app.use(express.json())

// console.log(cors)
app.use(cors())
const db= require("./server/config/db")

const apis=require("./server/router/route")
const CategoryModel = require("./server/apis/category/CategoryModel")


app.use("/api",apis)
app.use('/public', express.static(__dirname + '/server/public'));










app.listen(PORT,(err)=>{
    if(err){
        console.log("There is an error",err);
        
    }
    else{
        console.log("server is created")
    }
})

