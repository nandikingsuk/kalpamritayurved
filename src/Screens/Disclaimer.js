import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Disclaimer = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Disclaimer - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/disclaimer/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Disclaimer</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Disclaimer</h5></span>
            </div>
            <div className="card border-0">
                <div className="card-body">
                    <p className="card-text">If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at feedback@kalpamritgroup.com</p>
                    <p className="card-text">All the information on this website – www.kalpamritayurved.com – is published in good faith and for general information purpose only. Kalpamrit Aurved does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Kalpamrit Aurved), is strictly at your own risk. Kalpamrit Aurved will not be liable for any losses and/or damages in connection with the use of our website.</p>
                    <p className="card-text">From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</p>
                    <p className="card-text">Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</p>
                    <p className="card-text">Consent</p>
                    <p className="card-text">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                    <p className="card-text">Update</p>
                    <p className="card-text">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Disclaimer
