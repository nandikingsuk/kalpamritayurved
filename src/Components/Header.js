import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="./Assets/logo.svg" alt="Kalpamrit" height="30"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="navbar-brand" href="#"></a>
                        </li>
                    </ul>
                    <ul className="d-flex navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About us</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/ayurvedic-medicines">Ayurvedic Medicines</Link></li>
                            <li><Link className="dropdown-item" to="/health-care">Health Care</Link></li>
                            <li><Link className="dropdown-item" to="/personal-care">Personal Care</Link></li>
                            <li><Link className="dropdown-item" to="/home-care">Home Care</Link></li>
                            <li><Link className="dropdown-item" to="/food-products">Food Products</Link></li>
                            <li><Link className="dropdown-item" to="/organic-agriculture">Organic Agriculture Products</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/yoga">Yoga</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://rishipathy.com">Rishipaithy</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://kalpamritfoundation.com">Kalpamrit Foundation Trust</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/career">Career</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Header
