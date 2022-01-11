import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Termsandconditions = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms &amp; conditions - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/terms-and-conditions/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Terms &amp; conditions</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Terms &amp; conditions</h5></span>
            </div>
            <div className="card border-0">
                <div className="card-body">
                    <p className="card-text">This website is available for use only under the following conditions. By using this website, you agree to these terms:</p>
                    <p className="card-text">The material available on our website is provided solely for general information and is not intended, and should not be construed, as legal advice. It does not constitute an offer to provide legal advice or services to website users.</p>
                    <p className="card-text">The outcomes of our work described on the website depend on specific circumstances and other factors that are unique to each situation—they do not predict or guarantee similar results in other situations.</p>
                    <p className="card-text">Transmitting information to Kalpamrit by any means does not create an attorney-client relationship with Kalpamrit or any member of its legal staff. Visitors who want to consult Kalpamrit about a possible representation should contact a member of our legal staff directly. If Kalpamrit agrees to represent you, that agreement will be separately confirmed.</p>
                    <p className="card-text">Do not send confidential information to Kalpamrit by email, even using the email links provided on the website, as email messages may not be secure and no privilege or other legal protection against disclosure of the message may apply.</p>
                    <p className="card-text">You use our services at your disclaimer and agree to the privacy policy that we follow. For more information visit our Privacy Policy.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Termsandconditions
