const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('<YOUR_SECRET_KEY>');

// API

//APP CONFIG
const app = express();


// Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payment/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment request received >>>>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'inr'
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
});

// listen command
exports.api = functions.https.onRequest(app);


// http://localhost:5001/clone-2cad8/us-central1/api