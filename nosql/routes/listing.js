const express = require('express');
const assert = require('assert');
const database = require('../database');
const router = express.Router();

/* Get one listing */
router.get('/getListing/:listing_id', async (req, res) => {
    try {
        const db = database.connect();
        const { listing_id } = req.params;
        console.log(listing_id);

        const listing = await db.collection("listing").findOne({ listing_id: parseInt(listing_id) });
        res.json(listing);
        // database.close();
        return;
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;