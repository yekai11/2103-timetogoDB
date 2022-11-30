const express = require("express");
const database = require("../database");
const assert = require("assert");
const router = express.Router();

/* Endpoint to get all rental flat listings */
router.get("/allRental", async (req, res) => {
    try {
        let listings = [];
        const db = database.connect();
        const query = db.collection("listing").find({ listing_type: "rental" });
        query.forEach((listing, err) => {
            assert.equal(err, null);
            listings.push(listing);
        }, () => {
            res.json(listings);
            console.log(listings);
            // database.close();
        });
        return;
    } catch (err) {
        console.log(err);
    }
});

/* Endpoint for resale filter */
// router.post("/filterRental", async (req, res) => {
//   try {
//     const { accountID } = req.body; // setting objects for easy reference
//     console.log(typeof accountID); // for debugging

//     const accountID_int = parseInt(accountID); // converts string to int

//     console.log(typeof accountID_int); // for debugging

//     const deleteQuery = await pool.query(
//       `DELETE FROM Account WHERE account_id = ${accountID_int}`
//     );

//     res.sendStatus(200);
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
