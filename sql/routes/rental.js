const express = require("express");
const pool = require("../database");
const router = express.Router();

router.get("/allRental", async (req, res) => {
  try {

    const getAllResaleQuery = await pool.query(
      `SELECT L.listing_id, L.price, L.date_of_listing, F.postal_code, F.block, F.area, F.street, F.storey_range, F.num_of_rooms, F.floor_area_sqm,
      A.name, A.username, A.email, A.phone_number,
      LT.listing_type
      FROM Flat As F
      JOIN
      Listing AS L
      ON L.flat_id = F.flat_id
      JOIN
      Account AS A
      ON L.account_id = A.account_id
      JOIN
      ListingType AS LT
      ON L.listing_type_id = LT.listing_type_id
      WHERE L.listing_type_id = 2;
      `
    );

    console.log(getAllResaleQuery.rows);

    res.json(getAllResaleQuery.rows);
    return;
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
