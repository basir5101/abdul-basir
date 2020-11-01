import React from 'react';
import Contact from '../../Contact.js/Contact';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;