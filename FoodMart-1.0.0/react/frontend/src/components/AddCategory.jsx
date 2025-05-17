import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../public/shopping-cart.png'
import { useForm } from 'react-hook-form'
import '../css/addcategory.css'
import axios from 'axios'

function AddCategory() {
    const { register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm();

    const [Status, setStatus] = useState("")

    useEffect(() => {
        setInterval(() => {
            setStatus("")
        }, 8000);
      
    }, [Status])
    

   async function onSubmit(data){
        try {
            console.log(data);
            const respons=await axios.post("http://127.0.0.1:5000/api/category/addCategory",data)

            if (respons.data.success){
                console.log("ADDED");
                setStatus("Item Added")
                
            }
            else{
                console.log("Item alreay exist");
                setStatus("Item alreay exist")

            }
           
        } catch (error) {
            if(error.respons){
                console.log(error);

            }
            
        }
        
    }

    return (

        <>
            <Navbar />

            <section className="py-5">
                <div className="container-fluid">

                    <div className="bg-secondary py-5 my-5 rounded-5" style={{
                        background: "url('images/bg-leaves-img-pattern.png') no-repeat"
                    }}>
                        <div className="container my-5">
                            <div className={Status == "Item Added" ? 'w-75 fs-1  position-absolute text-center text-success' : 'w-75 fs-1  position-absolute text-center  text-red'} >{Status}</div>
                            <div className="row">
                                
                                <div className="col-md-6 p-5">
                                    <div className="section-header d-flex align-items-center">
                                        
                                        <h2 className="section-title display-4">ADD Your<span className="text-primary"> Category</span> </h2>
                                        <img src="shopping-cart.png" alt="" className=' img-fluid w-50' />
                                    </div>


                                </div>
                                <div className="col-md-6 p-5">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" {...register("category", { required: {value:true ,message:"Category is required"} })} className="form-control form-control-lg"  placeholder="Enter Your Category" />
                                            {errors.category && <div className='text-red'>{errors.category.message}</div>}
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
    )
}

export default AddCategory