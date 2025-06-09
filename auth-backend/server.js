require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cookieParser = require('cookie-parser'); //to read JWT tokens from cookies
const morgan = require('morgan'); // HTTP request logger
const connectDB = require('./config/db'); // Import the database connection

connectDB(); // Connect to the database
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // HTTP request logger

}
app.use(express.json());//to parse JSON bodies
app.use(cookieParser()); // Use cookie-parser middleware


const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);



app.get('/', (req, res)=>{
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
