const express = require("express");
const database = require("../database");
const router = express.Router();

router.get("/allRental", async (req, res) => {
    try {
        const db = database.connect();
        const listings = [];
        const query = db.collection("listing").find({ listing_type: "rental" });
        query.forEach((listing, err) => {
            assert.equal(err, null);
            listings.push(listing);
        }, () => {
            database.close();
            res.json(listings);
        });
    } catch (err) {
        console.log(err);
    }
});

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
