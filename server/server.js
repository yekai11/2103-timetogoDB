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

// Routes
const townRouter = require('./routes/town');
app.use('/town', townRouter);

const registerRouter = require('./routes/register')
app.use('/register', registerRouter);

const loginRouter = require('./routes/login')
app.use('/login', loginRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
