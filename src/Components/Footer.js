import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from './Copyright'

const Footer = () => {
    return (
        <div>
            {/* <!-- back to top section start here --> */}
            <footer className="footer mt-auto py-3 bg-secondary">
            <div className="container text-center" id="btn-back-to-top">
                <span className="text-white">Back to top</span>
            </div>
            </footer>
            {/* <!-- back to top section end here --> */}
            {/* <!-- footer start here --> */}
            <div className="row row-cols-1 row-cols-md-5 g-0 bg-dark text-white">
            <div className="col">
                <div className="card h-100 bg-dark border-0">
                <div className="card-body">
                    <p><a href="/"><img src="./Assets/logo.svg" height="60" alt="Kalpamrit"/></a></p>
                    <span>50 Mansi Enclave, Jagjeetpur, Kankhal, Haridwar 249408, Uttarakhand, India</span>
                    <p>CIN U24304DL2016PTC303904</p>
                    <button type="button" className="btn btn-outline-danger"><a href="https://goo.gl/maps/UaZk35YRTgdUQukE7" className="text-decoration-none link-dark text-white">Get directions</a></button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark border-0">
                <div className="card-body">
                    <h5 className="card-title">INFORMATION</h5>
                    <ul className="list-unstyled">
                    <li>
                        <Link to="/terms-and-conditions" className="text-decoration-none link-dark text-white">Terms &amp; Conditons</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className="text-decoration-none link-dark text-white">Privacy policy</Link>
                    </li>
                    <li>
                        <Link to="/disclaimer" className="text-decoration-none link-dark text-white">Disclaimer</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark border-0">
                <div className="card-body">
                    <h5 className="card-title">HELP</h5>
                    <ul className="list-unstyled">
                    <li>
                        <Link to="/testimonials" className="text-decoration-none link-dark text-white">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="text-decoration-none link-dark text-white">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="text-decoration-none link-dark text-white">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/site-map" className="text-decoration-none link-dark text-white">Site map</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark border-0">
                <div className="card-body">
                    <h5 className="card-title">PRODUCTS</h5>
                    <ul className="list-unstyled">
                    <li>
                        <p className="m-1"><Link to="/ayurvedic-medicines" className="text-decoration-none link-dark text-white">Ayurvedic Medicines</Link></p>
                    </li>
                    <li>
                        <p className="m-1"><Link to="/health-care" className="text-decoration-none link-dark text-white">Health Care</Link></p>
                    </li>
                    <li>
                        <p className="m-1"><Link to="/personal-care" className="text-decoration-none link-dark text-white">Personal Care</Link></p>
                    </li>
                    <li>
                        <p className="m-1"><Link to="/home-care" className="text-decoration-none link-dark text-white">Home Care</Link></p>
                    </li>
                    <li>
                        <p className="m-1"><Link to="/food-products" className="text-decoration-none link-dark text-white">Food Products</Link></p>
                    </li>
                    <li>
                        <p className="m-1"><Link to="/organic-agriculture" className="text-decoration-none link-dark text-white">Organic Agriculture Products</Link></p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark border-0">
                <div className="card-body">
                    <h5 className="card-title">CONTACT US</h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="tel:+918979014001" className="text-decoration-none link-dark text-white">Call:+91 89790 14001</a>
                    </li>
                    <li>
                        <a href="https://wa.me/918979014001" className="text-decoration-none link-dark text-white">WA:+91 89790 14001</a>
                    </li>
                    <li>
                        <a href="https://kalpamrit.net/en/customer/create-ticket/" className="text-decoration-none link-dark text-white">Complaints/Suggestions</a>
                    </li>
                    <li>
                        <p>Days: Monday - Saturday</p>
                    </li>
                    <li>
                        <p>(except public holidays)</p>
                    </li>
                    <li>
                        <p>Time: 9:00AM - 5:30PM</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            {/* footer end here */}
            <Copyright/>
        </div>
    )
}

export default Footer
