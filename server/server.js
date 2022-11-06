const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./database'); // pool.query();
const app = express();

// Parse incoming cookies and request bodies
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable all CORS requests
app.use(cors());

app.get('/', (req, res) => {
    res.send('ICT2103');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
