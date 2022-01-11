import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Sitemap = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Site map - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/site-map/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Site map</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Site map</h5></span>
            </div>
            <div className="card-group mx-4 mb-4">
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/"><FiCheckCircle/> Home</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/about-us"><FiCheckCircle/> About us</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/yoga"><FiCheckCircle/> Yoga</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/career"><FiCheckCircle/> Career</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/terms-and-conditions"><FiCheckCircle/> Terms &amp; conditions</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/privacy-policy"><FiCheckCircle/> Privacy policy</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/disclaimer"><FiCheckCircle/> Disclaimer</Link></li>
                    </ul>
                </div>
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/ayurvedic-medicines"><FiCheckCircle/> Ayurvedic Medicines</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/health-care"><FiCheckCircle/> Health Care</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/personal-care"><FiCheckCircle/> Personal Care</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/home-care"><FiCheckCircle/> Home Care</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/food-products"><FiCheckCircle/> Food Products</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/organic-agriculture"><FiCheckCircle/> Organic Agriculture Products</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/testimonials"><FiCheckCircle/> Testimonials</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/faq"><FiCheckCircle/> FAQ</Link></li>
                    </ul>
                </div>
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://rishipathy.com/"><FiCheckCircle/> Rishipathy</a></li>
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritfoundation.com/"><FiCheckCircle/> Kalpamrit Foundation Trust</a></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/contact-us"><FiCheckCircle/> Contact us</Link></li>
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamrit.net/en/customer/create-ticket/"><FiCheckCircle/> Complaints/ Suggestions</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Sitemap
