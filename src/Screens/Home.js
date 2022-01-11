import React from 'react'
import { Helmet } from 'react-helmet';
import { BiAdjust, BiAnalyse, BiCustomize, BiLoader } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/" />
            </Helmet>
            <Header/>
            {/* <!-- slider start here --> */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./Assets/img/sliders/slider-1.jpg" className="d-block w-100" alt="slider-1"/>
                </div>
                {/* <div className="carousel-item">
                <img src="./assets/img/slider-2.jpg" className="d-block w-100" alt="slider-2"/>
                </div>
                <div className="carousel-item">
                <img src="./assets/img/slider-3.jpg" className="d-block w-100" alt="slider-3"/>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            {/* <!-- slider end here --> */}
            <div className="container text-center mt-auto py-3">
            <span className="text-dark"><h5>Quality products</h5></span>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-2 bg-transparent text-dark">
                    <div className="card border-0">
                        <div className="card-body text-center">
                        <h1><BiCustomize /></h1>
                        <h5 className="card-title">Natural Health Care Products</h5>
                        <p className="card-text">Kalpamrit Natural Health Care Products committed to providing the best service and 100% natural products. Our main motto is to provide easy access to Ayurvedic treatment with doorstep products delivery facility.</p>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body text-center">
                        <h1><BiAdjust /></h1>
                        <h5 className="card-title">Organic Food products</h5>
                        <p className="card-text">Kalpamrit Natural &amp; Organic food products aim to build a strong healthy nation by creating awareness about the importance of consuming quality food, that is rich in different types of essentials like minerals, proteins, vitamins, carbohydrates, etc., to help mankind having a balanced diet.</p>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body text-center">
                        <h1><BiAnalyse /></h1>
                        <h5 className="card-title">Natural Personal Care Products</h5>
                        <p className="card-text">Kalpamrit Natural Personal Care Products offers a vast range of personal care ayurvedic products like skin care, ayurvedic herbal hair oil, face pack, and many more products.</p>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body text-center">
                        <h1><BiLoader /></h1>
                        <h5 className="card-title">Organic agriculture products</h5>
                        <p className="card-text">Agriculture is the cultivation of land and breeding of animals and plants to provide food, fiber, medicinal plants and other products to sustain and enhance life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-3 g-2 bg-transparent text-dark">
                    <Link to="/ayurvedic-medicines" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/ayurvedic_medicines.jpg" className="card-img" alt="cards-1"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Ayurvedic Medicines</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/health-care" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/natural-health-care.jpg" className="card-img" alt="cards-1"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Natural Health Care</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/personal-care" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/natural-personal-care.jpg" className="card-img" alt="natural-personal-care"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Natural Personal Care</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/home-care" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/natural-home-care.jpg" className="card-img" alt="natural-home-care"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Natural Home Care</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/food-products" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/natural-food-products.jpg" className="card-img" alt="natural-food-products"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Food Products</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/organic-agriculture" className="text-decoration-none link-dark">
                    <div className="col">
                        <div className="card h-100 shadow-sm p-3 mb-5 bg-body rounded text-center">
                            <img src="./Assets/img/home_page_card/organic-agriculture-products.jpg" className="card-img" alt="organic-agriculture-products"/>
                            <div className="card-img-overlay">
                            <h5 className="card-title">Organic Agriculture Products</h5>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="container text-center mt-auto py-3">
                <span className="text-dark"><h5>Co-founders</h5></span>
            </div>
            <div className="container mt-2 mb-4">
                <div className="row row-cols-1 row-cols-md-3 g-4 bg-transparent text-dark">
                    <div className="col">
                        <a href="/co-founders.html" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/cofounders/balkrishanarya.png" className="mx-auto" height="150" width="150" alt="dr-sudesh-kumar"/>
                            <h5 className="card-title my-2">Mr. Balkrishan Arya</h5>
                        </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/co-founders.html" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/cofounders/sudeshji.png" className="mx-auto" height="150" width="150" alt="dr-sudesh-kumar"/>
                            <h5 className="card-title my-2">Dr. Sudesh Kumar</h5>
                        </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/co-founders.html" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/cofounders/deepakji.png" className="mx-auto" height="150" width="150" alt="mr-satyapal-yadav"/>
                            <h5 className="card-title my-2">Mr. Deepak Sharma</h5>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="my-4 bg-secondary">
                <p className="text-white text-center my-4"><h5>Our recognitions</h5></p>
                <div className="row row-cols-1 row-cols-md-6 g-4 mx-2 bg-transparent text-dark">
                    <div className="col my-4">
                        <a href="./Assets/img/recognitions/kapl_halal.jpg" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/halal_logo.png" className="mx-auto" height="150" width="150" alt="dr-sudesh-kumar"/>
                        </div>
                        </a>
                    </div>
                    <div className="col my-4">
                        <a href="./Assets/img/recognitions/kapl_iso.jpg" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/iso_logo.png" className="mx-auto" height="150" width="150" alt="dr-sudesh-kumar"/>
                        </div>
                        </a>
                    </div>
                    <div className="col my-4">
                        <a href="./Assets/img/recognitions/kmpl_haccp.jpg" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/haccp_logo.png" className="mx-auto" height="150" width="150" alt="mr-satyapal-yadav"/>
                        </div>
                        </a>
                    </div>
                    <div className="col my-4">
                        <a href="./Assets/img/recognitions/kapl_fssai.pdf" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/fssai.png" className="mx-auto" height="150" width="150" alt="mr-satyapal-yadav"/>
                        </div>
                        </a>
                    </div>
                    <div className="col my-4">
                        {/* <a href="#" className="text-decoration-none link-dark"> */}
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/gmp_logo.png" className="mx-auto" height="150" width="150" alt="mr-satyapal-yadav"/>
                        </div>
                        {/* </a> */}
                    </div>
                    <div className="col my-4">
                        <a href="./Assets/img/recognitions/kapl_apeda.pdf" className="text-decoration-none link-dark">
                        <div className="card p-3 bg-body rounded text-center border-0">
                            <img src="./Assets/img/recognitions/apeda_logo.png" className="mx-auto" height="150" width="150" alt="mr-satyapal-yadav"/>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card text-center border-0">
                <img src="./Assets/img/other-images/footer-image.jpeg" alt="products"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
