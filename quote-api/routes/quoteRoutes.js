const express = require('express');
const Quote = require('../models/Quote');
const router = express.Router(); //create a new router instance

router.get('/quotes', async (req, res) => {
    const quotes = await Quote.find(); //find all quotes in the database
    res.json(quotes); //send the quotes as a JSON response
}
);

router.get('/one-quote', async (req, res) => {
    const count = await Quote.countDocuments(); //count the number of quotes in the database
    const random = Math.floor(Math.random() * count); //generate a random number between 0 and the count
    const quote = await Quote.findOne().skip(random); //find a random quote by skipping the random number of quotes
    res.json(quote); //send the random quote as a JSON response
}
);

router.post('/one-quote', async (req, res) => {
    const { text, author } = req.body; //get the text and author from the request body
    const quote = new Quote({ text, author }); //create a new quote instance
    await quote.save(); //save the quote to the database
    res.status(201).json(quote); //send the saved quote as a JSON response          
});
router.get('/test', (req, res) => {
    res.send('Server is working');
});
module.exports = router; //export the router to be used in the main app file
// This file defines the routes for the quote API, including getting all quotes, getting a random quote, and posting a new quote.