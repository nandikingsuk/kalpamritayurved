import React from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Helmet } from 'react-helmet';

const Aboutus = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About us - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/about-us/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./Assets/img/sliders/about_us_slider_new.gif" className="d-block w-100" alt="slider-1"/>
                    </div>
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
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>About us</h5></span>
            </div>
            <div className="card">
                <div className="card-body">
                <p className="card-text">Kalpamrit Ayurved has been providing wide array of authentic products and seamless services to its customers. Kalpamrit products has gained consumer trusts and brand loyalty within a short period of time because of our attention to quality, service and commitment to provide exceptional value for money products and services. Kalpamrit range of products are used by everyone in the family to someone with specific ailments who may require to control diabetes or blood pressure etc. Our products are sold under a single brand name “KALPAMRIT” and continuously gains new customers because of our commitment to produce organic/natural and non-GMO ingredients.</p>
                <p className="card-text">We believe that everyone on planet earth deserves a healthy life, therefore we make sure that our products are suitable for everyone and for daily use. Kalpamrit Ayurved believes in natural healing and rejuvenation, which is the reason all products use 100% safe and pure natural ingredients, all handpicked by rural primary sector workers for our consumers benefits. So, by purchasing from us, you are not only taking the best care of you and your family’s overall health, but are also lending a helping hand to the hundreds of rural area-based workers specializing in the collection of raw materials required to make Kalpamrit products.</p>
                <p className="card-text">We only source our raw materials from suppliers that agree with our ethical means of business and code of conduct. By this, we ensure fair-pay systems among each and every employee/worker.</p>
                <p className="card-text">Under Kalpamrit Ayurved, we also have an active organization called the “Kalpamrit Foundation Trust”. A portion of every sales of Kalpamrit product goes to Kalpamrit Foundation Trust for charity work, which holds some really pious values. As a loyal customer of Kalpamrit, you will be glad to know that we are also extending a helping hand for the preservation of the wildlife and environment.</p>
                <p className="card-text">Despite giving access to pure, authentic and natural products to our customers, we also aim to heal our customers who may need extra medical care which is the reason behind our own wellness center called “RISHIPATHY”, where our doctors specialized in the Natural and Ayurveda field. No pharmaceutical drugs containing harmful chemicals are prescribed by the professionals in “RISHIPATHY”. Our wellness center visitors only get our own developed Ayurvedic medicines or Yoga exercises to heal them completely from within. With the daily dosage of Ayurvedic goodness offered by Kalpamrit, help us stand by our tagline, ‘Rejuvenate Your Life’! Kalpamrit Ayurved, as a whole, has the sole intention of mass development by improving the quality of life of its consumers and rejuvenating their lives with health, wealth, and prosperity.</p>
                <p className="card-text">Our Philosophy:</p>
                <p className="card-text">Kalpamrit Ayurved is a firm believer that nature has all the natural resources to cure almost all the diseases as such it works to ensure that maximum benefits are yield in all its products. This ensures that our supplier’s and farm’s employee’s adopts best practices in the industry and avoid harmful pesticides and where possible harvest organically grown products. By giving best products with best services, we sustain satisfied and loyal customers.</p>
                <p className="card-text">When we take from nature, we also wish to give back to express our gratitude and we do that through “KALPAMRIT FOUNDATION TRUST” , for which a portion of all our sales gets channelled to the charity for nature and wildlife protection.Our marketing channels are also carefully chosen, and our sales philosophy is focused to ensure that our products and client’s interests are aligned, thereby entrenching a “service first and profit later” motto.</p>
                <p className="card-text">“Kalpamrit” which means “Rejuvenation” stays true to its brand name to Rejuvenate our valuable customer’s life and lifestyle.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Aboutus
