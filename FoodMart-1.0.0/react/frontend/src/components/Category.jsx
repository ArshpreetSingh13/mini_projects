import React, { useEffect, useState } from 'react'
import { GiFruitBowl } from "react-icons/gi";
import '../../public/cate1.png'
import '../css/category.css'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Category() {


    const [users, setusers] = useState([])
    useEffect( () => {

        const fetchData = async ()=>{
            await axios.get("http://localhost:5000/api/category/getAll").then((USER) => {
                setusers(USER.data.message)
                console.log(users);

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
                                              <span  class="nav-link category-item swiper-slide hoverb">
                                                
                                                <NavLink to={"/cateproduct/"+e._id}>
                                                      <img src="cate1.png" alt="Category Thumbnail" />
                                                      <h3 class="category-title">{e.category}</h3>
                                                </NavLink>
                                              </span>
                                          </div>
                                      })
                                  }
                              
                                {/* <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" class="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 class="category-title">Fruits & Veges</h3>
                                      </a>
                                </div> */}
                            </div>

                              {/* <div class="d-flex">
                                 
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-bread-baguette.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Breads & Sweets</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-soft-drinks-bottle.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-wine-glass-bottle.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-animal-products-drumsticks.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-bread-herb-flour.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" class="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 class="category-title">Fruits & Veges</h3>
                                  </a>

                              </div> */}
                          </div>

                      </div>
                  </div>
              </div>
          </section>
          <Footer />
    </>
  )
}

export default Category