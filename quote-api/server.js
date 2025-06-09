require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors({
    origin: true, // or specify your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); //middleware to parse JSON request bodies, midlleware ma .use use huncha

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully")
    })
    .catch(err=>{
        console.error("MongoDB connection error:", err);
    })

app.use('/', quoteRoutes); //use the quote routes for any requests to /api

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
); //start the server and listen on the specified port