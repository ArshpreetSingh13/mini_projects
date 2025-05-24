import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../../public/shopping-cart.png'
import { useForm } from 'react-hook-form'
import '../css/addcategory.css'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, Zoom } from 'react-toastify'

function UpdateCategory() {
    const { register,
        handleSubmit,
        watch,
        reset, formState: { errors }
    } = useForm();

    const [Status, setStatus] = useState("")
    const { id } = useParams()

    const [first, setfirst] = useState([])

    const ref = useRef(false)



    const navigate = useNavigate()

    useEffect(() => {
        if (ref.current) {
            const timer = setInterval(() => {
                setStatus("")

                navigate('/managecategory')
            }, 4000);

            return () => clearTimeout(timer);
        }

    }, [Status])

    useEffect(() => {

        const call = async () => {
            const response = await axios.get(`http://localhost:5000/api/category/getOne/${id}`).then((user) => {

                console.log(user.data.message)
                setfirst([user.data.message])
                reset({ category: user.data.message.category });
            }).catch(() => {

                console.log("error")
            })
        }

        call()



    }, [])

    async function onSubmit(data) {

        console.log("update");

        try {


            const newform = new FormData();

            newform.append("category", data.category)

            if (data.image && data.image[0]) {
                newform.append("image", data.image[0]);
            }



            const response = await axios.put(`http://127.0.0.1:5000/api/category/update/${id}`, newform, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if (response.data.success) {
                console.log("Updated SuccessFully");
                toast("Item Updated Succfully", {
                   transition: Zoom
                                });
                setStatus("Item UPdated")

            }
            else {
                console.log("Item Not Updated");
                setStatus("Item Not Updated")

            }


        } catch (error) {
            if (error.response) {
                console.log(error);

            }

        }

        ref.current = true;
    }


    const showAll = () => {
        console.log(first);

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

                            <div className="row">

                                <div className="col-md-6 p-5">
                                    <div className="section-header d-flex align-items-center">

                                        <h2 className="section-title display-4">Update Your<span className="text-primary"> Category</span> </h2>
                                        <img src="shopping-cart.png" alt="" className=' img-fluid w-50' />
                                    </div>


                                </div>
                                <div className="col-md-6 p-5">
                                    {/* <button className='btn btn-info' onClick={showAll}>show</button> */}

                                    {
                                        first.map((e) => {
                                            return <form onSubmit={handleSubmit(onSubmit)}>

                                                <div className="mb-3">
                                                    <label className="form-label">Name</label>
                                                    <input type="text"  {...register("category", { required: { value: true, message: "Category is required" } })} className="form-control form-control-lg" placeholder="Enter Your Category" />
                                                    {errors.category && <div className='text-red'>{errors.category.message}</div>}
                                                </div>




                                                <div className="mb-3">
                                                    <label className="form-label">Image</label>
                                                    <input type="file"  {...register("image")} className="form-control form-control-lg" />
                                                    {errors.image && <div className='text-red'>{errors.image.message}</div>}
                                                </div>
                                                <div className="mb-3 d-flex ">
                                                    <label className="form-label">Old Image  </label>
                                                    <img src={`http://localhost:5000/public/${e.image}`} alt="" />
                                                </div>


                                                <div className="d-grid gap-2">
                                                    <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                                                </div>
                                            </form>
                                        })
                                    }


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

export default UpdateCategory