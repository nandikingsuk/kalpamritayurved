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
            <Footer/>
        </div>
    )
}

export default Career
