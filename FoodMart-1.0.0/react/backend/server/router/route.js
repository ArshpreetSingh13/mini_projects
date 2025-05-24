const router=require("express").Router()
const multer = require('multer')

const category=require("../apis/category/CategoryController")
const product=require("../apis/products/ProductController")
const user=require("../apis/register/Register.controller")


router.post("/user/addUser",user.add)

// Category
// Category
// Category
// Category

const CategoryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/category/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix +'-'+ file.originalname)
    }
})

const CategoryUpload = multer({ storage: CategoryStorage })

router.post("/category/addCategory", CategoryUpload.single('image') ,category.add )


router.get("/category/getAll",category.getAll)
router.get("/category/getOne/:id",category.getOne)
router.get("/category/delete/:id",category.Delete)
router.put("/category/update/:id",CategoryUpload.single('image') ,category.Update)


// product 
// product 
// product 
// product 


const ProductStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/product/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const ProductUpload = multer({ storage: ProductStorage })

router.post("/product/addProduct", ProductUpload.single("image") ,product.add)
router.get("/product/getAll",product.getAll)
router.get("/product/getCatPro/:id",product.getCatPro)
router.get("/product/getOne/:id",product.getOne)
router.get("/product/delete/:id",product.Delete)
router.put("/product/update/:id",ProductUpload.single('image'),product.Update)





module.exports=router

