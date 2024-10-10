import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Navbar = () => {
  const handleDonateClick = async () => {
    const stripeCheckout = await stripePromise;
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await response.json();
    await stripeCheckout.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center py-8 px-14 justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-700">Print-A-Smile</h1>
          <div className="ml-10">
            <ul className="md:flex space-x-8 hidden">
              <li><Link to="/" className="text-gray-800 font-semibold">Home</Link></li>
              <li><Link to="/about" className="text-gray-800 font-semibold">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-800 font-semibold">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div
          className="lg:flex hidden items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg"
          onClick={handleDonateClick}
        >
          <button>Donate Now</button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;