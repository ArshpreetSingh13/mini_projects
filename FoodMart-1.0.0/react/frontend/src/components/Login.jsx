import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../public/shopping-cart.png'
import { useForm } from 'react-hook-form'
import '../css/addcategory.css'
import '../../public/Login.png'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
function Login() {
    const { register,
        handleSubmit,
        watch,
        reset, formState: { errors }
    } = useForm();

    const [Status, setStatus] = useState("")



    useEffect(() => {
        setInterval(() => {
            setStatus("")
        }, 8000);

    }, [Status])


    async function onSubmit(data) {
      
       
      

    }
  return (
    <>
        <Navbar/>
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

                                      <h2 className="section-title display-4">Please<span className="text-primary"> Login</span> </h2>
                                      <img src="Login.png" alt="" className=' img-fluid w-50' />
                                  </div>


                              </div>
                              <div className="col-md-6 p-5">
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                      <div className="mb-3">
                                          <label className="form-label">Email</label>
                                          <input type="email"  {...register("email", { required: { value: true, message: "Please Enter You Email" } })} className="form-control form-control-lg" placeholder="Enter Your Email" />
                                          {errors.email && <div className='text-red'>{errors.email.message}</div>}
                                      </div>
                                      <div className="mb-3">
                                          <label className="form-label">Password</label>
                                          <input type="password"  {...register("password", { required: { value: true, message: "Please Enter Password" } })} className="form-control form-control-lg" placeholder="Enter Your Password" />
                                          {errors.password && <div className='text-red'>{errors.password.message}</div>}
                                      </div>
                                      <div className="mb-3">
                                          <p>Is New User <NavLink className="text-primary" to="/register">Click Here</NavLink> </p>
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
        <Footer/>
    </>
  )
}

export default Login