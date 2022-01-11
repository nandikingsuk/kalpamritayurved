import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { RiStarHalfSLine, RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Personalcare = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Personal Care - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/personal-care/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Personal Care</li>
                </ol>
            </nav>
            <section>
                <div className="container py-5">
                <div className="row">
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/194.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">PROTEIN SHAMPOO</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">200 ml</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/196.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">HAIR OIL</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">200 ml</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/190.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Aloevera Gel</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">100 ml</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/63.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Gold Facial Kit</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">50gm x 5</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/87.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">BODY LOTION</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">100 ml</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/102.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ANTI DANDRUFF SHAMPOO</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">200 ml</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/115.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ALOEVERA SOAP</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">75 gm</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/117.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">NEEM SOAP</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">75 gm</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                {/* <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* product end here */}
                    {/* product start here */}
                    {/* <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/325.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">SANDAL SOAP</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">100 gm</span></p>
                                <div className="ms-auto text-warning">
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarHalfSLine/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                <a href="#" className="text-dark fw-bold text-decoration-none">Read more</a>
                            </div>
                            </div>
                        </div>
                    </div> */}
                    {/* product end here */}
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Personalcare
