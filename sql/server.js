const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Parse incoming cookies and request bodies
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable all CORS requests
app.use(cors());

/* Routes */ 
// Register
const registerRouter = require('./routes/register')
app.use('/register', registerRouter);

// Login
const loginRouter = require('./routes/login')
app.use('/login', loginRouter);

// Profile
const profileRouter = require('./routes/profile')
app.use('/profile', profileRouter);

// Resale
const resaleRouter = require('./routes/resale')
app.use('/resale', resaleRouter);

// Rental
const rentalRouter = require('./routes/rental')
app.use('/rental', rentalRouter);

// Interest
const interestRouter = require('./routes/interest')
app.use('/interest', interestRouter);

// Seller
const sellerRouter = require('./routes/seller')
app.use('/seller', sellerRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
