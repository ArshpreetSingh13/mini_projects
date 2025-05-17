const router=require("express").Router()
const category=require("../apis/category/CategoryController")

const product=require("../apis/products/ProductController")

router.post("/category/addCategory",category.add)
router.get("/category/getAll",category.getAll)

router.post("/product/addProduct",product.add)
router.get("/product/getAll",product.getAll)
router.get("/product/getCatPro",product.getCatPro)


module.exports=router

