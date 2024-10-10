import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Set up Stripe Checkout
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Donate = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.log('[error]', error);
    } else if (paymentIntent.status === 'succeeded') {
      alert('Donation Successful');
    }
  };

  const handleDonateClick = async () => {
    const stripeCheckout = await stripePromise;
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await response.json();
    console.log(session);
    await stripeCheckout.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div>
      <button onClick={handleDonateClick} style={{ marginTop: '20px' }}>
        Donate with Stripe Checkout
      </button>
    </div>
  );
};

export default Donate;