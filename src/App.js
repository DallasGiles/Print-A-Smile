import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

const App = () => {
    const ref = useRef(null); // Correctly using useRef inside the component

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;