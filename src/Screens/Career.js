import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Career = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/career/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Career</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Career</h5></span>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="card m-4 shadow mb-5 bg-body rounded">
                    <div className="m-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your email"/>
                    </div>
                    <div className="mx-3 mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
                    </div>
                    <a href="#" className="btn btn-primary mx-3 mb-3">Submit</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Career
