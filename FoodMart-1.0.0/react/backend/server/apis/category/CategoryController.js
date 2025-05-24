const { json } = require("express")
const CategoryModel = require("./CategoryModel")


let add = (req, res) => {

    let validation = ""
    if (!req.body.category) {

        validation = "Category is required"
    }
    if (!req.file) {

        validation += "image is required"
    }
    if (!!validation) {
        res.send({
            success: false,
            message: validation,
            status: 400
        })
    }
    else {


        CategoryModel.findOne({ category: req.body.category }).then(async (CATEGORY) => {
            if (CATEGORY) {
                res.send({
                    success: false,
                    message: "Already exist",
                    status: 400
                })
            }
            else {
                const newCategory = new CategoryModel()
                const totalCategoies = await CategoryModel.countDocuments()

                newCategory.autoId = totalCategoies + 1
                newCategory.category = req.body.category
                newCategory.image = "category/" + req.file.filename
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
        }).catch(() => {
            res.send({
                success: false,
                message: "not added",
                status: 500
            })
        })


    }


}


let getAll = async (req, res) => {

    const userData = await CategoryModel.find()
    if (!userData) {
        res.send({
            success: false,
            message: "error",
            status: 200
        })
    }
    else {


        res.send({
            success: true,
            message: userData,
            status: 200
        })
    }

}

let getOne = async (req, res) => {

    const id = req.params.id


    const userData = await CategoryModel.findOne({ _id: id })


    if (!userData) {
        res.send({
            success: false,
            message: "error",
            status: 200
        })
    }
    else {


        res.send({
            success: true,
            message: userData,
            status: 200
        })
    }

}

let Delete = async (req, res) => {

    const id = req.params.id
    console.log(id);
    const DeleteCategory = await CategoryModel.findByIdAndDelete(id)

    if (!DeleteCategory) {
        res.send({
            success: false,
            massege: "Category not deleted",
            status: 202

        })
    }
    else {
        res.send({
            success: false,
            massege: DeleteCategory,
            status: 202

        })
    }



}

let Update = async (req, res) => {

    try {
        const id = req.params.id

        const { category } = req.body

        const UpdateData = { category }

        if (req.file) {
            UpdateData.image = "category/"+ req.file.filename
        }

        const update = await CategoryModel.findByIdAndUpdate(
            id,
            UpdateData,
            { new: true }

        )

        if (!update) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({ success: true, message: "Category updated", data: update });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Error updating category", error: err });


    }
    }


    module.exports = {
        add,
        getAll,
        getOne,
        Delete,
        Update
    }