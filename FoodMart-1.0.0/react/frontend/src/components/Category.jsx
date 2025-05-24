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
            await axios.get("http://localhost:5000/api/category/getAll").then((res) => {
                setusers(res.data.message)
                console.log(res.data.message);

            }).catch((err) => {
                console.log(err);

           })
        }
        fetchData()
        
    }, [])


  
  
    
  return (
    <>
          <Navbar />
          
          <section className="py-5 ">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">

                          <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                              <h2 className="section-title">Category</h2>

                              <div className="d-flex align-items-center">
                                  <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                  <div className="swiper-buttons">
                                      <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                                      <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">

                          <div className="category-carousel swiper">

                          

                            <div className="row">
                            {
                                      users.map((e) => {
                                          return <div key={e._id} className="col-md-3 ">
                                              <span  className="nav-link category-item swiper-slide hoverb">
                                                
                                                <NavLink to={"/cateproduct/"+e._id}>
                                                      
                                                      <img src={`http://localhost:5000/public/${e.image}`} alt={e.image} />
                                                      
                                                      <h3 className="category-title">{e.category}</h3>
                                                </NavLink>
                                              </span>
                                          </div>
                                      })
                                  }
                              
                                {/* <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div>
                                <div className="col-md-3">
                                      <a href="index.html" className="nav-link category-item swiper-slide">
                                          <img src="cate1.png" alt="Category Thumbnail" />
                                          <h3 className="category-title">Fruits & Veges</h3>
                                      </a>
                                </div> */}
                            </div>

                              {/* <div className="d-flex">
                                 
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-bread-baguette.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Breads & Sweets</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-soft-drinks-bottle.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-wine-glass-bottle.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-animal-products-drumsticks.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-bread-herb-flour.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
                                  </a>
                                  <a href="index.html" className="nav-link category-item swiper-slide">
                                      <img src="images/icon-vegetables-broccoli.png" alt="Category Thumbnail"/>
                                          <h3 className="category-title">Fruits & Veges</h3>
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