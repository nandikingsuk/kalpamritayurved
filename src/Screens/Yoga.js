import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Yoga = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Yoga - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/yoga/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./Assets/img/sliders/yoga_page_11_12.jpg" className="d-block w-100" alt="slider-1"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Yoga</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Yoga</h5></span>
            </div>
            <div className="card border-0">
                <div className="card-body">
                <p className="card-text">Yoga is a profound exercise regime that has been rooted to the Indian tradition for thousands of years. It connects your mind, body, and spirit with its unique poses, produces a calm sensation throughout you. Besides being clinically proven to alleviate stress and anxiety in us humans, Yoga is also a certified remedy for a number of diseases.Kalpamrit Ayurved is all set to rejuvenate your lives by delivering your bodies with the goodness of Mother Nature. All the products marketed under us are 100% natural so that our customers are free from the harmful side effects of chemical formulations. However, sometimes our natural products may require you to put some effort in your wellbeing. Only then they are able to show their true potential in healing you from the very depths of your bodily discomforts.</p>
                <p className="card-text">A Natural Remedy</p>
                <p className="card-text">As an apt ailment for certain body problems, we prescribe Yoga to our customers. We are proud to run a wellness center called Rishipathy. It has helped thousands recover from their ill-health conditions through Yoga taught by experienced professionals.</p>
                <p className="card-text">As mentioned before, this divine practice is filled with positive energy and can do wonders if incorporated in your daily lives. The different poses work effectively for the different issues you experience in your body.</p>
                <p className="card-text">Moreover, the poses make sure that ample pressure is put on several parts of your body to ensure proper flow of hormones, improved blood circulation around the body, and the right amount of muscle stretch. All this results in you having a fit and active body, keeping you far away from common yet alarming diseases of today’s time like diabetes, cardiac issues, high blood pressure, depression, weak digestion and arthritis.</p>
                <p className="card-text">These diseases may significantly decrease your productivity, snatching away your young years, and making you feel twice your age. We at Kalpamrit strongly have faith in the natural process of Yoga for healing our customers. That is because it is some sort of imbalance in your body that results in a disease. The imbalance may not be fulfilled completely by the use of pharmaceutical drugs as they may only treat the problem superficially and subdue it.</p>
                <p className="card-text">Yoga instead, targets the root cause and helps to eliminate it completely from your body, bringing back the lost harmony of your life. Therefore, under Kalpamrit Ayurved, you can only expect to be treated via authentic remedies.</p>
                </div>
            </div>
            <div className="container my-4">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/grSXWl2BRPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/GcaqdmOqv7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/vXaIZmKAU04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/jHoErYtargk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/tip4zwXvnLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/FhhJQMd3teE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/3KsWOblC8Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/TbI_n0PjkVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <iframe src="https://www.youtube.com/embed/hQHHy5_YkQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Yoga
