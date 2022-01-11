import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Faq = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQ - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/faq/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>FAQ</h5></span>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How do I shop for Kalpamrit products?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Kalpamrit products can be purchased through our website www.kalpamritmarketing.com. You may need to create an account or provide some personal information (name, address, phone number) relating to the delivery of the product.</p>
                        </div>
                    </div>
                </div>                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How do I pay for Kalpamrit products?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Our products can be paid for using any international credit card, for example, MasterCard, VISA, etc. Our payment portal is 100% secured and your important online banking options are held solely by us. We are a trusted site and have zero records of customer payment inconvenience.</p>
                        </div>
                    </div>
                </div>                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How does Kalpamrit confirm orders?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Upon purchasing from Kalpamrit, you will be sent an email with your complete order details. Afterward, you are most likely to be contacted via texts or phone calls by the delivery man, until and unless your product is in your hands.</p>
                        </div>
                    </div>
                </div>                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Is it safe to use Kalpamrit's medications?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Medications at Kalpamrit are provided by skilled Ayurveda doctors. Our ailments are safe and made with natural herbs and spices.</p>
                        </div>
                    </div>
                </div>                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How does Kalpamrit's courier service work?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>All our products are delivered via trusted and well-known courier service providers. We will let you know when we hand over your product to the courier service company via an SMS or phone call.</p>
                        </div>
                    </div>
                </div>                
            </div>
            <Footer/>
        </div>
    )
}

export default Faq
