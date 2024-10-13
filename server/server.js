require('dotenv').config();
const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(express.json());
app.use(cors()); 

const contacts = []; // Temporary storage

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    contacts.push({ name, email, message });
    res.status(201).send('Message received');
});

app.get('/api/contact', (req, res) => {
    res.json(contacts); // Retrieve submitted messages
});
//stripe down below
app.post('/api/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  });

  app.post('/api/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation',
          },
          unit_amount: 5000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    res.json({ id: session.id });
  });

  app.delete('/api/contact/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < contacts.length) {
        contacts.splice(index, 1);
        res.status(200).send({ message: 'Comment deleted successfully' });
    } else {
        res.status(404).send({ message: 'Comment not found' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));