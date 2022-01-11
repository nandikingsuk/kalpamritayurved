import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Testimonials = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Testimonials - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/testimonials/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Testimonials</h5></span>
            </div>
            <div class="card m-2 border-0">
                <div class="card-body">
                    <figure>
                        <blockquote class="blockquote">
                        <p>Best product 🙏🙏🙏🙏Thanks kalpamrit 💐💐💐💐</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                        Name: <cite title="Source Title">Kamlesh Chauhan</cite>
                        </figcaption>
                    </figure>
                </div>
                <div class="card-body">
                    <figure>
                        <blockquote class="blockquote">
                        <p>Thanks Kalpamrit team</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                        Name: <cite title="Source Title">Kasam Khan</cite>
                        </figcaption>
                    </figure>
                </div>
                <div class="card-body">
                    <figure>
                        <blockquote class="blockquote">
                        <p>India no 1 products in kalpamirit 💓💓💓</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                        Name: <cite title="Source Title">Samser Hashmi</cite>
                        </figcaption>
                    </figure>
                </div>
                <div class="card-body">
                    <figure>
                        <blockquote class="blockquote">
                        <p>Best results of kalpamrit SEABUKTHRONE</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                        Name: <cite title="Source Title">Mayank Choudhary</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Testimonials
