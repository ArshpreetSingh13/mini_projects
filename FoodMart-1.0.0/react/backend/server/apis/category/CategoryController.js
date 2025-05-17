const { json } = require("express")
const CategoryModel = require("./CategoryModel")
const categoryModel = require("./CategoryModel")

let add = (req, res) => {

    let validation = ""
    if (!req.body.category) {

        validation = "Category is required"
    }
    if (!!validation) {
        res.send({
            success: false,
            message: validation,
            status: 400
        })
    }
    else {

        
        categoryModel.findOne({category:req.body.category}).then(async(CATEGORY)=>{
            if(CATEGORY){
                res.send({
                    success: false,
                    message: "Already exist",
                    status: 400
                })
            }
            else{
                const newCategory = new categoryModel()
                const totalCategoies=await categoryModel.countDocuments()

                newCategory.autoId = totalCategoies+1
                newCategory.category = req.body.category
                newCategory.save().then((CategoryData) => {
                    res.send({
                        success: true,
                        message: CategoryData,
                        status: 201
                    })
                }).catch(() => {
                    res.send({
                        success: false,
                        message: "not added",
                        status: 500
                    })
                })
            }
        }).catch(()=>{
            res.send({
                success: false,
                message: "not added",
                status: 500
            })
        })

       
    }


}


let getAll =async (req, res) => {

    const userData =await CategoryModel.find()
    if (!userData) {
        res.send({
            success: false,
            message: "error",
            status: 200
        })
    }
    else {
        
    
        res.send({
            success:true,
            message:userData,
            status:200
        })
    }

}
module.exports = {
    add,
    getAll
}