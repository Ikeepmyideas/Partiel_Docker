const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const defaultRoute = require('./routes/defaultRoute');
const corsMiddleware = require('./middleware/cors');
const volunteersRoutes = require("./routes/volunteerRoutes");
const express = require('express');
const cookieParser = require('cookie-parser');


require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true 
};

app.use(cors(corsOptions));
app.use(cookieParser());
// Middleware CORS
app.use(corsMiddleware);

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Test route to check if the server is running
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

// Routes
// Add your routes here

//app.use('/volunteers', volunteersRoutes);
app.use('/', defaultRoute);

module.exports = app;
