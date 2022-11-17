const express = require('express');
const pool = require('../database');
const router = express.Router();

// Retrieve all town details
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM town');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
