import React from 'react'
import { RiStarHalfSLine, RiStarSFill } from 'react-icons/ri'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Helmet } from 'react-helmet'

const Ayurvedicmedicines = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ayurvedic Medicines - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/ayurvedic-medicines/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Ayurvedic Medicines</li>
                </ol>
            </nav>
            <section>
                <div className="container py-5">
                <div className="row">
                    {/* product start here */}
                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-4">
                        <div className="card">
                            <img
                            src="/Assets/img/products/223.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">TULSI PANCHAMRIT</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">15 ml</span></p>
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
                            src="/Assets/img/products/228.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Stone Cura</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/215.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Madhumeh Rakshika Capsules</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">60 CAP</span></p>
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
                            src="/Assets/img/products/55.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">CLEARTOX</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30ml</span></p>
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
                            src="/Assets/img/products/318.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Fast Fat Burner</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">90 Cap</span></p>
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
                            src="/Assets/img/products/104.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">Kalpavita</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">150ml</span></p>
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
                            src="/Assets/img/products/110.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">AYURVEDIC NEEM ALOEVERA FACEWASH</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">60 ml</span></p>
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
                            src="/Assets/img/products/224.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">EYE CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">15 ml</span></p>
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
                            src="/Assets/img/products/148.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">CURCUMA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/150.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ORGANIC JAMUN VINEGAR</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">500 ml</span></p>
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
                            src="/Assets/img/products/153.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">COUGH SYRUP</h5>
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
                            src="/Assets/img/products/159.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">GILOY TABLET</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">60 tab</span></p>
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
                            src="/Assets/img/products/175.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">REXANA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">15 ml</span></p>
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
                            src="/Assets/img/products/209.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">HEART BEAT</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/125.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">SHATAVAR</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/145.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">PILES CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/57.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLUCURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/61.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLUCURA KWATH</h5>
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
                            src="/Assets/img/products/71.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FLUCURA CAPSULE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/75.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">EPI CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/76.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ASMA CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/89.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">OUCHARTHO</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/91.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">OUCHARTHO CAPSULE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/93.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">HEARTBEAT CAPSULE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/106.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">KNEEGEN</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/112.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ACIDO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/121.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">VERTI CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/123.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">SKIN CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/136.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">FIBRO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/135.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">LIVO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/139.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">THYRO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/146.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">LEUCO CARE</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/162.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">LUMP CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/163.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">KIDNEY CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/216.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">LEUCO FIGHT</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">60 cap</span></p>
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
                            src="/Assets/img/products/247.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ASHWAGANDHA CAP</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/264.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">NASYA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">10 ml</span></p>
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
                            src="/Assets/img/products/275.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">PSORACURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/276.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">PSORACURA OINTMENT</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">20 gm</span></p>
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
                            src="/Assets/img/products/287.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">OUCHARTHO FORMULA 1</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/289.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">NEURO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/301.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">STRESS CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 cap</span></p>
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
                            src="/Assets/img/products/313.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">ERAND TAIL</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/319.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">SCIATI CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/323.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">PROSTO CURA</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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
                            src="/Assets/img/products/324.jpg"
                            className="card-img-top lazyload"
                            alt="clear-tox"
                            />
                            <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">HEIGHT GROW</h5>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">UOM: <span className="fw-bold">30 ml</span></p>
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

export default Ayurvedicmedicines
