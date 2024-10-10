import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Importing Stripe dependencies
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with the public key from the environment variables
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const appearance = {
    theme: 'night',
  };
  
  const options = {
    appearance,
  };

// Create the root for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise} options={options}>
    <App />
  </Elements>
);