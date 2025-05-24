import React, { useEffect, useState } from 'react'
import { GiFruitBowl } from "react-icons/gi";
import '../../public/cate1.png'
import '../css/category.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';



function ManageCategory() {


    const [users, setusers] = useState([])
    const Navigate=useNavigate()

    const navigate=(CategoryId)=>{
        Navigate(`/updatecategory/${CategoryId}`)
        console.log("jlo");
        
    }
    useEffect(() => {

        const fetchData = async () => {
            await axios.get("http://localhost:5000/api/category/getAll").then((USER) => {
                setusers(USER.data.message)
                
            }).catch((err) => {
                console.log(err);

            })
        }
        fetchData()
        
    }, [])
    
    useEffect(() => {
        
        console.log(users);
    }, [users])
    

    const HandleDelte= async(categoryId)=>{
    
        try {
            axios.get(`http://localhost:5000/api/category/delete/${categoryId}`)
            alert("Deleted")
            setusers(users.filter(item => item._id !== categoryId));

        } catch (error) {
            console.log(error);
            
            
        }
    }




    return (
        <>
            <Navbar />

            <section class="py-5 ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="section-header d-flex flex-wrap justify-content-between mb-5">
                                <h2 class="section-title">Category</h2>

                                <div class="d-flex align-items-center">
                                    <a href="#" class="btn-link text-decoration-none">View All Categories →</a>
                                    <div class="swiper-buttons">
                                        <button class="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                                        <button class="swiper-next category-carousel-next btn btn-yellow">❯</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">

                            <div class="category-carousel swiper">



                                <div className="row">
                                    {
                                        users.map((e) => {
                                            return <div className="col-md-3 ">
                                                <span class="nav-link category-item swiper-slide hoverb">
                                                    
                                                    <img src={`http://localhost:5000/public/${e.image}`} alt={e.image} />

                                                    
                                                    <h3 class="category-title">{e.category}</h3>

                                             
                                                    
                                                    <button onClick={() => { HandleDelte(e._id) }} className="btn btn-danger mt-2 me-2" >Delete</button>

                                                    <button onClick={() => { navigate(e._id)}} className="btn btn-success mt-2 ms-2">Update</button>
                                                </span>
                                            </div>
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


export default ManageCategory