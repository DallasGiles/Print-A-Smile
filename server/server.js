require('dotenv').config();
const cors = require('cors');
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mongoose = require('mongoose');
const Comment = require('./models/Comment'); // Import the model
const app = express();
app.use(express.json());
app.use(cors()); 


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected'))
.catch(err => console.error('Connection error', err));

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newComment = new Comment({ name, email, message });
        await newComment.save();
        res.status(201).send('Message received');
    } catch (error) {
        res.status(500).send('Failed to save comment');
    }
});

app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await Comment.find(); // Retrieve from the database
        res.json(contacts);
    } catch (error) {
        res.status(500).send('Failed to retrieve comments');
    }
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

  app.post('/api/admin-login', (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD

    if (password === adminPassword) {
        res.status(200).send({ success: true });
    } else {
        res.status(401).send({ success: false, message: 'Incorrect password' });
    }
});

 // Delete a comment by its MongoDB ID
 app.delete('/api/contact/:id', async (req, res) => {
  try {
      const { id } = req.params;
      console.log(`Deleting comment with id: ${id}`); // Log to verify ID

      // Check if it's a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).send({ message: 'Invalid ID' });
      }

      const deletedComment = await Comment.findByIdAndDelete(id);
      
      if (!deletedComment) {
          return res.status(404).send({ message: 'Comment not found' });
      }

      res.status(200).send({ message: 'Comment deleted successfully' });
  } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).send({ message: 'Failed to delete comment' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));