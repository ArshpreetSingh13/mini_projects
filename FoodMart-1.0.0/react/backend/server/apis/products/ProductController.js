const { json } = require("express")

const ProductModel = require("./ProductModel")

let add = (req, res) => {

    let validation = ""
    if (!req.body.product) {
        validation = "Product name is required. "
    }
    if (!req.body.price) {
        validation += "Product name is required. "
    }
    if (!req.body.category) {
        validation += "category name is required. "
    }
    if (!req.body.description) {
        validation += "Product name is description. "
    }

    if (!!validation) {
        res.send({
            success: false,
            message: validation,
            status: 200
        })
    }
    else {

        ProductModel.findOne({ product: req.body.product }).then(async (PRODUCT) => {
            if (PRODUCT) {
                res.send({
                    success: false,
                    message: "Item Already Exist",
                    status: 202
                })
            }
            else {
                const newProduct = new ProductModel
                const totalProducts = await ProductModel.countDocuments()

                console.log(totalProducts);

                newProduct.autoId = totalProducts + 1
                newProduct.product = req.body.product
                newProduct.price = req.body.price
                newProduct.image = req.file.filename
                newProduct.category = req.body.category
                newProduct.description = req.body.description
                newProduct.save().then((ProductData) => {

                    res.send({
                        success: true,
                        message: ProductData,
                        status: 201
                    })
                }).catch(() => {
                    res.send({
                        success: false,
                        message: "Product is not added",
                        status: 200
                    })
                })
            }
        }).catch(() => {
            res.send({
                success: false,
                message: "Product is not added",
                status: 200
            })
        })




    }


}


let getAll = async (req, res) => {
    const productData = await ProductModel.find()


    if (!productData) {
        res.send({
            success: false,
            message: "Data not fatched",
            status: 200
        })
    }
    else {
        console.log(productData);

        res.send({
            success: true,
            message: productData,
            status: 200
        })

    }
}

let getOne = async (req, res) => {
    const id = req.params.id;

    try {
        await ProductModel.findById(id).then((SingleProduct) => {
            console.log(SingleProduct);

            res.send({
                success: true,
                message: SingleProduct,
                status: 200
            })
        }).catch((err) => {

            res.send({
                success: false,
                message: "error",
                status: 202
            })
        })
    }
    catch (err) {
        res.send({
            success: false,
            message: "error",
            status: 202
        })
    }
}

let getCatPro = async (req, res) => {


    const id = req.params.id;
    console.log("Category ID:", id);

    await ProductModel.find({ category: id }).then((products) => {

        res.send({
            success: true,
            message: products,
            status: 200
        })
    }).catch(() => {
        res.send({
            success: false,
            message: "Data not fatched",
            status: 200
        })
    })




}

let Delete = async (req, res) => {

    const id = req.params.id
    const deletePRoduct = await ProductModel.findByIdAndDelete(id)

    if (!deletePRoduct) {
        res.send({
            success: false,
            massage: "fail to delete",
            status: 202
        })
    }
    else {
        res.send({
            success: ture,
            massage: deletePRoduct,
            status: 200
        })
    }
}

let Update = async (req, res) => {

    try {
    
        const { id } = req.params;

        const { product, price, category, description }=req.body
        const updateData = { product, price, category, description }

        if (req.file) {
            updateData.image = req.file.filename
        }


        
       const updateRes= await ProductModel.findByIdAndUpdate(id, updateData, { new: true })
        if (updateRes) {
            res.send({
                success:true,
                message:updateRes,
                status:202
            })

        }
        else{
            res.send({
                success: false,
                message: "errorss",
                status: 201
            })
        }


    }
    catch(err){
        res.send({
            success: false,
            message: "errorw",
            status: 201
        })
    }
}

module.exports = {
    add,
    getAll,
    getCatPro,
    Delete,
    getOne,
    Update
}