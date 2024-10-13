import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import AdminDashboard from './components/adminDashboard';
import Donate from './components/donate';
import AdminLogin from './pages/adminLogin';

const App = () => {
    const ref = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                        <Route
                        path="/admin"
                        element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/admin-login" />}
                    />
                    <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/donate" element={<Donate />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;