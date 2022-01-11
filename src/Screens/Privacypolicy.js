import React from 'react'
import { Helmet } from 'react-helmet'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Privacypolicy = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy Policy - Kalpamrit Ayurved</title>
                <link rel="canonical" href="https://kalpamritayurved.com/privacy-policy/" />
            </Helmet>
            <Header/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><Link className="text-decoration-none text-dark" to="/">Home</Link></li>
                <BiChevronRight className="my-auto"/>
                <li className="breadcrumb-item active" aria-current="page">Privacy policy</li>
                </ol>
            </nav>
            <div className="container text-center">
                <span className="text-dark"><h5>Privacy policy</h5></span>
            </div>
            <div className="card border-0">
                <div className="card-body">
                    <p className="card-text">At Kalpamrit Ayurved, accessible from www.kalpamritayurved.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Kalpamrit Ayurved and how we use it.</p>
                    <p className="card-text">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at feedback@kalpamritayurved.com</p>
                    <p className="card-text">Log Files</p>
                    <p className="card-text">Kalpamrit Ayurved follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
                    <p className="card-text">Privacy Policies</p>
                    <p className="card-text">You may consult this list to find the Privacy Policy for each of the advertising partners of Kalpamrit Ayurved.</p>
                    <p className="card-text">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Kalpamrit Ayurved, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p className="card-text">Note that Kalpamrit Ayurved has no access to or control over these cookies that are used by third-party advertisers.</p>
                    <p className="card-text">Third Pary Privacy Policies</p>
                    <p className="card-text">Kalpamrit Ayurved’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
                    <p className="card-text">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?</p>
                    <p className="card-text">Children’s Information</p>
                    <p className="card-text">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p className="card-text">Kalpamrit Ayurved does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    <p className="card-text">Online Privacy Policy Only</p>
                    <p className="card-text">This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Kalpamrit Ayurved. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                    <p className="card-text">Consent</p>
                    <p className="card-text">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Privacypolicy
