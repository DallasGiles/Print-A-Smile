import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import AdminDashboard from './components/adminDashboard';
import Donate from './components/donate';

const App = () => {
    const ref = useRef(null);

    return (
        <div className="min-h-screen flex flex-col">
            <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/donate" element={<Donate />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;