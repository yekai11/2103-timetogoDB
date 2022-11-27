const express = require("express");
const assert = require("assert");
const database = require("../database");
const router = express.Router();

/* Endpoint to add interest */
router.post("/addInterest", async (req, res) => {
    try {
        const db = database.connect();
        const { account_id, listing_id } = req.body; // setting objects for easy reference
        console.log(account_id); // for debugging

        // Add interest to interested array field
        db.collection("account").updateOne({ account_id:  parseInt(account_id) }, { $push: { "interested": { "listing_id": parseInt(listing_id) } } }, (err, result) => {
            assert.equal(null, err);
            res.sendStatus(201);
            // database.close();
        });

        return;
    } catch (err) {
        console.log(err);
    }
});

/* Endpoint to delete interest */
router.post("/deleteInterest", async (req, res) => {
    try {
        const db = database.connect();
        const { account_id, interest_id } = req.body; // setting objects for easy reference
        console.log(interest_id); // for debugging

        // Remove interest from interested array field
        db.collection("account").updateOne({ account_id: account_id }, { $pull: { "interested": { "listing_id": listing_id } } }, (err, result) => {
            assert.equal(null, err);
            res.sendStatus(204);
            database.close();
        });
        return;
    } catch (err) {
        console.log(err);
    }
});

/* Endpoint to get all listings where 1 account is interested in */
router.get("/accountInterest/:account_id", async (req, res) => {
    try {
        const db = database.connect();
        const { account_id } = req.params; // setting objects for easy reference
        console.log(account_id); // for debugging

        const listing = await db.collection("account").findOne({ account_id: account_id });
        database.close();
        res.json(listing.interested);
        return;
    } catch (err) {
        console.log(err);
    }
});

/* Endpoint to get number of accounts interested in flat */
router.get("/numAccountsInterest", async (req, res) => {
    try {
        const db = database.connect();
        const { listing_id } = req.body; // setting objects for easy reference
        console.log(listing_id); // for debugging

        const numInterestQuery = await pool.query(
            `SELECT COUNT(interest_id) FROM Interest WHERE listing_id = ${listing_id};`
        );

        res.json(numInterestQuery.rows);
        return;
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
