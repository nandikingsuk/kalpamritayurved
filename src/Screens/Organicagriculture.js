import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { RiStarHalfSLine, RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Organicagriculture = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Organic Agriculture - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/organic-agriculture/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Organic Agriculture</li>
                </ol>
            </nav>
            <section>
                <div className="container py-5">
                <div className="row">
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/62.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI FUNGICIDE</h5>
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
                            src="/Assets/img/products/81.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI POWER GROW</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">250 ml</span></p>
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
                            src="/Assets/img/products/116.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI SOIL POWER</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">5 Kg</span></p>
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
                            src="/Assets/img/products/141.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI BACTERIOCIDE</h5>
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
                            src="/Assets/img/products/142.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI TERMICIDE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">250 ml</span></p>
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
                            src="/Assets/img/products/161.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLAGSI LARVICIDE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">250 ml</span></p>
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
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Organicagriculture
