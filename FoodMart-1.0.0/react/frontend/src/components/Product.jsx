import React, { useEffect, useState } from 'react'
import { GiFruitBowl } from "react-icons/gi";
import '../../public/cate1.png'
import '../css/category.css'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function Product() {


   


    const [product, setProduct] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            await axios.get("http://localhost:5000/api/product/getAll").then((PRODUCT) => {
                setProduct(PRODUCT.data.message)
                console.log(product);

            }).catch((err) => {
                console.log(err);

            })
        }
        fetchData()

    }, [])





    return (
        <>
            <Navbar />

            <section class="py-5 ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="section-header d-flex flex-wrap justify-content-between mb-5">
                                <h2 class="section-title">Product</h2>

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
                                        product.map((e) => {
                                            return <div className="col-md-3 ">
                                                <span 
                                                 class="nav-link category-item swiper-slide hoverb">
                                                    <img src={`http://localhost:5000/public/product/${e.image}`} alt={e.image} />
                                                    <h3 class="category-title">{e.product}</h3>
                                                    <p>{e.category}</p>
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

export default Product