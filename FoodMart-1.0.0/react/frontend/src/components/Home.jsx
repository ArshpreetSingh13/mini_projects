import React from 'react'
import '../../public/product.png'
import '../css/Home.css'
import '../../public/banner-2.png'
import '../../public/banner-3.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer'

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid ps-4 mb-5">
                <div className="row">
                    <div className="col-md-7 bg-info d-flex mt-2 rounded-4 py-4 px-4" style={{ height: 600 }}>
                        <div>

                            <div className="fs-1 my-3 ps-5 ms-5 text-orange ">100% natural</div>
                            <h3 className="display-4">Fresh <br />Smoothie & <br />Summer Juice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</a>
                        </div>
                        <div className="img-wrapper col-md-5">
                            <img src="product.png" className="img-fluid" />
                        </div>
                       
                    </div>
                    <div className="col-md-5">
                        <div className="row m-2">
                            <div className="col-md-12 bg-gray d-flex justify-content-end align-items-end mb-2  ps-5 pe-0 rounded-4" style={{ height: 290 }}>
                                <div className='pb-3 pe-3'>
                                    <div className="categories sale ">20% off</div>
                                    <div className='fs-5'>
                                        
                                        <span className='text-dark ps-2'>-----------Sale</span>
                                    </div>
                                    <h3 className="banner-title fs-3">Fruits & <br />Vegetables</h3>
                                    <a href="#" className="d-flex  align-items-center nav-link pt-2 fs-3">Shop Collection <FaArrowRightLong className='
                                    ps-2'/>
                                    </a>
                                </div>
                                <div>
                                    <img src="banner-2.png" alt="" className='img-fluid borderRight' />
                                </div>
                            </div>
                            <div className="col-md-12 bg-pink d-flex justify-content-end align-items-end rounded-4 ps-5 pe-0 pt-3" style={{ height: 290 }}>
                                <div className='pb-5'>
                                    <div className="categories sale ">15% off</div>
                                    <div className='fs-5'>

                                        <span className='text-dark ps-2'>-----------Sale</span>
                                    </div>
                                    <h3 className="item-title">Baked Products</h3>
                                    <a href="#" className="d-flex align-items-center nav-link pt-2 fs-3">Shop Collection<FaArrowRightLong className='ps-2' /></a>
                                </div>
                                <div>
                                    <img src="banner-3.png" alt="" className='img-fluid borderRight' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <Footer/>
        </>
    )
}

export default Home