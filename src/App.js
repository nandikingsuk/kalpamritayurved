import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './Screens/Aboutus';
import Ayurvedicmedicines from './Screens/Ayurvedicmedicines';
import Career from './Screens/Career';
import Contactus from './Screens/Contactus';
import Disclaimer from './Screens/Disclaimer';
import Faq from './Screens/Faq';
import Foodproducts from './Screens/Foodproducts';
import Healthcare from './Screens/Healthcare';
import Home from './Screens/Home'
import Homecare from './Screens/Homecare';
import Organicagriculture from './Screens/Organicagriculture';
import Personalcare from './Screens/Personalcare';
import Privacypolicy from './Screens/Privacypolicy';
import Sitemap from './Screens/Sitemap';
import Termsandconditions from './Screens/Termsandconditions';
import Testimonials from './Screens/Testimonials';
import Yoga from './Screens/Yoga';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/terms-and-conditions" element={ <Termsandconditions/>} />
        <Route exact path="/privacy-policy" element={ <Privacypolicy />} />
        <Route exact path="/disclaimer" element={ <Disclaimer/>} />
        <Route exact path="/faq" element={<Faq/>} />
        <Route exact path="/testimonials" element={<Testimonials/>} />
        <Route exact path="/site-map" element={<Sitemap/>} />
        <Route exact path="/about-us" element={<Aboutus/>} />
        <Route exact path="/yoga" element={<Yoga/>} />
        <Route exact path="/career" element={<Career/>} />
        <Route exact path="/ayurvedic-medicines" element={<Ayurvedicmedicines/>} />
        <Route exact path="/health-care" element={<Healthcare/>} />
        <Route exact path="/personal-care" element={<Personalcare/>} />
        <Route exact path="/home-care" element={<Homecare/>} />
        <Route exact path="/food-products" element={<Foodproducts/>} />
        <Route exact path="/organic-agriculture" element={<Organicagriculture/>} />
        <Route exact path="/contact-us" element={<Contactus/>} />
      </Routes>
    </Router>
  )
}

export default App

