import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../../public/adproduct.png'
import { useForm } from 'react-hook-form'
import '../css/addcategory.css'
import axios from 'axios'


function AddProduct() {
    const { register,
        handleSubmit,
        watch, 
        reset,formState: { errors }
    } = useForm();

    const [Status, setStatus] = useState("")

    useEffect(() => {
       
      setInterval(() => {
                setStatus("")
                
            }, 8000);
        

    }, [Status])


    const [Category, setCategory] = useState([])
    useEffect(() => {

        const fetchData = async () => {

           

            await axios.get("http://localhost:5000/api/category/getAll").then((USER) => {
                setCategory(USER.data.message)
                console.log(Category);

            }).catch((err) => {
                console.log(err);

            })
        }
        fetchData()

    }, [])


    async function onSubmit(data) {
        try {
            console.log(data);

            const newform = new FormData();
            newform.append("product",data.product)
            newform.append("price",data.price)
            newform.append("image",data.image[0])
            newform.append("category",data.category)
            newform.append("description",data.description)
           

            const response = await axios.post("http://127.0.0.1:5000/api/product/addProduct", newform)

            if (response.data.success) {
                console.log("ADDED");
                setStatus("Item Added")
                reset()

            }
            else {
                console.log("Item alreay exist");
                setStatus("Item alreay exist")

            }

        } catch (error) {
            if (error.response) {
                console.log(error);

            }

        }

       

    }
  return (
    <>
          <>
              <Navbar />

              <section className="py-5">
                  <div className="container-fluid">

                      <div className="bg-secondary py-5 my-5 rounded-5" style={{
                          background: "url('images/bg-leaves-img-pattern.png') no-repeat"
                      }}>
                          <div className="container my-5">
                              <div className={Status == "Item Added" ? 'w-75 fs-1  position-absolute text-center text-success  ' : 'w-75 fs-1  position-absolute text-center  text-red  '} >{Status}</div>
                              <div className="row">

                                  <div className="col-md-6 p-5">
                                      <div className="section-header d-flex align-items-center">

                                          <h2 className="section-title display-4">ADD Your<span className="text-primary"> Product</span> </h2>
                                          <img src="adproduct.png" alt="" className=' img-fluid w-50' />
                                      </div>


                                  </div>
                                  <div className="col-md-6 p-5">
                                      <form onSubmit={handleSubmit(onSubmit)}>

                                          <div className="mb-3">
                                              <label className="form-label">Product Name</label>
                                              <input type="text" {...register("product", { required: { value: true, message: "product is required" } })} className="form-control form-control-lg" placeholder="Enter Your product Name" />
                                              {errors.product && <div className='text-red'>{errors.product.message}</div>}
                                          </div>
                                          <div className="mb-3">
                                              <label className="form-label">Product Price</label>
                                              <input type="number" {...register("price", { required: { value: true, message: "Price is required" } })} className="form-control form-control-lg" placeholder="Enter Your product price" />
                                              {errors.price && <div className='text-red'>{errors.price.message}</div>}
                                          </div>
                                         
                                         
                                          <div className="mb-3">
                                              <label className="form-label">Product Category</label>

                                              <select {...register("category", { required: { value: true, message: "category is required" } })} className="form-control form-control-lg" placeholder="Enter Your product category" >
                                                  <option selected disabled >Select your category</option>

                                                    {
                                                        Category.map((e)=>{
                                                            return <option value={e._id}>{e.category}</option>
                                                        })
                                                    }
                                                
                                             
                                              </select>

                                              {errors.category && <div className='text-red'>{errors.category.message}</div>}
                                          </div>

                                          <div className="mb-3">
                                              <label className="form-label">Product image</label>
                                              <input type="file" {...register("image", {required: {value: true, message: "image is required" } })} className="form-control form-control-lg" placeholder="Enter Your product Name" />

                                              {errors.image && <div className='text-red'>{errors.image.message}</div>}
                                          </div>

                                          <div className="mb-3">
                                              <label className="form-label">Description</label>
                                              <textarea {...register("description", { required: { value: true, message: "Description of the product is required" } })} className="form-control form-control-lg" placeholder="Enter Your product Name"></textarea>
                                              
                                              {errors.product && <div className='text-red'>{errors.description.message}</div>}
                                          </div>



                                          <div className="d-grid gap-2">
                                              <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                                          </div>
                                      </form>

                                  </div>

                              </div>

                          </div>
                      </div>

                  </div>
              </section>

              <Footer />
          </>
    </>
  )
}

export default AddProduct